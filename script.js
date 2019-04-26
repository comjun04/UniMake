// JavaScript Document

// sounds Manager Modal Box
var soundsManagerModal = document.getElementById('sounds-manager');
var soundsManagerOpenBtn = document.getElementById('sounds-manager-open');
var soundsManagerCloseBtn = document.getElementById('sounds-manager-close');

soundsManagerOpenBtn.onclick = function() {
	soundsManagerModal.style.display = "block";
}

soundsManagerCloseBtn.onclick = function() {
	soundsManagerModal.style.display = "none";
}

// Information Edit Modal Box
var packInfoModal = document.getElementById('packInfoModal');
var packInfoOpenBtn = document.getElementById('packInfoModalOpen');
var packInfoCloseBtn = document.getElementById('packInfoModalClose');

packInfoOpenBtn.onclick = function() {
	packInfoModal.style.display = "block";
}

packInfoCloseBtn.onclick = function() {
	packInfoModal.style.display = "none";
}

// soundList
var soundListAddBtn = document.getElementById('soundListAddBtn');
var soundListInputFile = document.getElementById('soundListInputFile');
soundListAddBtn.onclick = function() {
	
}