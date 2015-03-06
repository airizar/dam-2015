window.onload = function() {
    var loaded = true;
    var video = document.getElementById("video");
    video.width=700;
    var iniciar = document.getElementById("iniciar");
    var pausar = document.getElementById("pausar");
    var parar = document.getElementById("parar");
    var avanzar = document.getElementById("avanzar");
    var retroceder = document.getElementById("retroceder");
    var inicio = document.getElementById("inicio");
    var fin = document.getElementById("fin");
    var pantalla_completa = document.getElementById("pantalla_completa");
    var volumen = document.getElementById("volumen");
    var progress = document.getElementById("progress");
    var list = document.querySelectorAll("ul");
    progress.value = 0;

    var fcanplay = function() {
        video.volume = 0;
        loaded = true;
        progress.value = 0;
    };
    var finiciar = function(e) {
        if (loaded) {
            console.log(video);
            video.play();
        }
    };
    var fpausar = function(e) {
        if (loaded) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    var fparar = function(e) {
        if (loaded) {
            video.pause();
            video.currentTime = 0;
        }
    };
    var favanzar = function(e) {
        if (loaded) {
            video.currentTime = video.currentTime + 10;
        }
    };
    var fretroceder = function(e) {
        if (loaded) {
            video.currentTime = video.currentTime - 10;
        }
    };

    var ffin = function(e) {
        if (loaded) {
            video.currentTime = video.duration;
        }
    };
    var fprogress = function(e) {
        if (loaded) {
            progress.value = video.currentTime / video.duration * 100;
        }
    };
    var fvolumen = function(e) {
        video.volume = this.value / 100;
    };
    var chageVideo = function(e) {
        e.preventDefault();
        var videoSrc = e.target.dataset.src;
        fparar(e);
        if (Modernizr.video.h264) {
            video.src = videoSrc + ".mp4";
        } else {
            video.src = videoSrc + ".mp4";
        }
        video.load();
    };
    video.addEventListener('canplay', fcanplay, false);
    iniciar.addEventListener('click', finiciar, false);
    pausar.addEventListener('click', fpausar, false);
    parar.addEventListener('click', fparar, false);
    avanzar.addEventListener('click', favanzar, false);
    retroceder.addEventListener('click', fretroceder, false);
    video.addEventListener('timeupdate', fprogress, false);
    volumen.addEventListener('change', fvolumen, false);
    list[0].addEventListener('click', chageVideo, false);

};
