'use strict';

function notifyError(err) {
    document.getElementById('bottomNotifyErrorString').innerHTML = "Error: " + err;
    document.getElementById('bottomNotifyError').style.display = "block";
}

function notifyInfo(text) {
    document.getElementById('bottomNotifyInfoString').innerHTML = text;
    document.getElementById('bottomNotifyInfo').style.display = "block";
}