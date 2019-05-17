// Sidebar
function sidebarOpen() {
	var obj = document.getElementById('sidebar');
	obj.style.width = '100%';
	// obj.style.display = 'block';
}

function sidebarClose() {
	document.getElementById('sidebar').style.width = 0;
}

// soundList
var soundListAddBtn = document.getElementById('soundListAddBtn');
var soundListInputFile = document.getElementById('soundListInputFile');
soundListAddBtn.onclick = function () {
	var audio = document.getElementById('soundListInputFile').files[0];
	if(audio) { // NOT undefined
		var fileReader = new FileReader();
		fileReader.readAsDataURL(audio);
		fileReader.onload = function(e) {
			addSound(e.target.result, audio.name);
		}
	}
}

function soundListNewElement(name) {
	var li = document.createElement("li");
	li.className = "soundListItem";

	var t = document.createElement('span');
	var tt = document.createTextNode(name);
	t.appendChild(tt);
	li.appendChild(t);

	var b = document.createElement("i");
	b.className = "material-icons w3-button w3-blue";
	b.innerHTML = "play_arrow";
	b.addEventListener('click', function(){soundListPlay(this)}, false);
	li.appendChild(b);

	document.getElementById('soundList').appendChild(li);
}

function soundListPlay(obj) {
	loadSound(obj.parentElement.children[0].textContent).then(function(audio){
		playAudio(audio);
	});
}

// sounds
var buttonPressedX = 0;
var buttonPressedY = 0;
var buttonPressedMC = 0;

function buttonSoundsModalOpen(x_mc, y) {
	var buttonPos = "";
	if (y == 0) // mc button
	{
		buttonPressedMC = x_mc;
		buttonPressedY = 0;
		buttonPos = "mc" + x_mc;
	} else {
		buttonPressedX = x_mc;
		buttonPressedY = y;
		buttonPos = "(" + y + ", " + x_mc + ")";
	}
	document.getElementById('buttonSoundsTitle').innerHTML = buttonPos + " - Sounds";
	document.getElementById('buttonSoundsModal').style.display = 'block';
}

function buttonSoundsModalClose() {
	document.getElementById('buttonSoundsModal').style.display = 'none';
}
