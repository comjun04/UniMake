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

// sounds Manager List
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function soundsListNewElement() {
	var li = document.createElement("li");
}