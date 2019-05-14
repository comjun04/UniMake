'use strict';

function idbSupported() {
	return "indexedDB" in window;
}
var db;

document.addEventListener("DOMContentLoaded", function() {
	if(!idbSupported) {
		alert("Your browser doesn't support stable version of indexedDB. Saving feature will not be available.");
		console.warn("indexedDB support = false");
		return;
	} else {
		console.info("indexedDB support = true");
		idbSupported = true;
		
		var dbOpenRequest = indexedDB.open("MyTestDataBase", 2);
		
		dbOpenRequest.onupgradeneeded = function(e) {
			console.log("Upgrading...");
			db = e.target.result;
			
			if(!db.objectStoreNames.contains("info")) {
				db.createObjectStore("info");
			}
			if(!db.objectStoreNames.contains("sounds")) {
				db.createObjectStore("sounds", {autoIncrement: true});
			}
		}
		
		dbOpenRequest.onsuccess = function(e) {
			console.info("Success!");
			db = e.target.result;
			
			db.onerror = function (event) {
				alert("Database Error: " + event.target.errorCode);
				console.error("Database Error: " + event.target.errorCode);
}
			
			document.querySelector("#packInfoSave").addEventListener("click", updatePackInfo, false);
			
			loadPack();
		}
		
		dbOpenRequest.onerror = function(e) {
			console.error("Error");
			console.dir(e);
			notifyError(e.target.error);
		}
	}
}, false);

function loadPack(e) {
	var transaction = db.transaction(["info"], 'readonly');
	var store = transaction.objectStore('info');
	
	var cursor = store.openCursor();
	
	var array = [];
	
	cursor.onsuccess = function(e) {
		var result = e.target.result;
		if(result) {
			console.log("Key", result.key);
			console.log("Data", result.value);
			array.push(result.value);
			result.continue();
		} else { // EOF
			console.log(array);
			
			document.querySelector("#unipack_name").value = array[4];
			document.querySelector("#unipack_author").value = array[0];
			document.querySelector("#ButtonX").value = array[1];
			document.querySelector("#ButtonY").value = array[2];
			document.querySelector("#Chain").value = array[3];
		}
	}
	
	cursor.onerror = function(e) {
		alert('cursor error')
		console.log("Error",e.target.error.name);
		notifyError(e.target.error);
	}
}

function updatePackInfo(e) {
	var pack_name = document.querySelector("#unipack_name").value;
	var pack_author = document.querySelector("#unipack_author").value;
	var pack_buttonX = document.querySelector("#ButtonX").value;
	var pack_buttonY = document.querySelector("#ButtonY").value;
	var pack_chain = document.querySelector("#Chain").value;
	
	console.log("About to add "+pack_name+"/"+pack_author+"/"+pack_buttonX+"/"+pack_buttonY+"/"+pack_chain);
	
	try {
		var transaction = db.transaction(["info"], "readwrite");
		var store = transaction.objectStore("info");
		
		var request = store.put(pack_name, 'Name');
		request = store.put(pack_author, 'Author');
		request = store.put(pack_buttonX, 'ButtonX');
		request = store.put(pack_buttonY, 'ButtonY');
		request = store.put(pack_chain, 'Chain');

		request.onerror = function(e) {
			alert('request error');
			console.log("Error",e.target.error.name);
			//document.querySelector('#packInfoSaveError').value = "An Error occured: " + e.target.error;
			//document.getElementById('packInfoSaveError').style.display = "block";
			notifyError(e.target.error);
		}
		
		request.onsuccess = function(e) {
			console.log("Woot! Did it");
			document.getElementById('packInfoModal').style.display = "none";
			notifyInfo("UniPack information was saved.");
		}
	} catch(error) {
		console.error("Error: " + error)
		notifyError(error.name + ": " + error.message);
	}
}

function addSound(sound) {
	var transaction = db.transaction(['sounds'], "readwrite");
	var store = transaction.objectStore('sounds');

	var request = store.add(sound);
	request.onerror = function(e) {
		console.error(e.target.error);
		notifyError(e.target.error.name);
	}
	request.onsuccess = function(e) {
		notifyInfo("Sound Added!");
	}
}