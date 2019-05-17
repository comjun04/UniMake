'use strict';

function playAudio(audio) {
    var obj = new Howl({
        src: audio
    });
    obj.play();
}