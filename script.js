// JavaScript Document

// Sidebar
function sidebarOpen() {
	let obj = document.getElementById('sidebar');
	obj.style.width = '100%';
	// obj.style.display = 'block';
}
function sidebarClose() {
	document.getElementById('sidebar').style.width = 0;
}

// sounds Manager Modal Box
var soundsManagerModal = document.getElementById('sounds-manager');

function soundsManagerOpen() {
	soundsManagerModal.style.display = "block";
}

function soundsManagerClose() {
	soundsManagerModal.style.display = "none";
}

// Information Edit Modal Box
var packInfoModal = document.getElementById('packInfoModal');

function packInfoOpen() {
	packInfoModal.style.display = "block";
}

function packInfoClose() {
	packInfoModal.style.display = "none";
}

// soundList
var soundListAddBtn = document.getElementById('soundListAddBtn');
var soundListInputFile = document.getElementById('soundListInputFile');
soundListAddBtn.onclick = function() {
	
}