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

var buttonPressedX = 0;
var buttonPressedY = 0;
var buttonPressedMC = 0;

function buttonSoundsModalOpen(x_mc, y) {
	var buttonPos = "";
	if(y == 0) // mc button
	{
		buttonPressedMC = x_mc;
		buttonPressedY = 0;
		buttonPos = "mc" + x_mc;
	}
	else {
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