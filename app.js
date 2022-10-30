let audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;

let body = document.body;

body.addEventListener('click', function () {
    if (audio.pause) {
        audio.play();

    }
})
body.addEventListener('dblclick', function () {
    audio.pause();
})

