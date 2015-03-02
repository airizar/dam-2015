window.onload = function() {
	var loaded=true;
    var video = document.getElementById("video");

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
    var list=document.querySelectorAll("div");
    progress.value=0;

    var fcanplay=function(){
    	loaded=true;
    	volumen.value=0;
    	progress.value=0;
    };
    var finiciar = function(e) {
    	if (loaded){
        console.log(video);
        video.play();
    }
    };
    var fpausar = function(e) {
    	if (loaded){
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    };

    var fparar = function(e) {
    	if (loaded){
        video.pause();
        video.currentTime=0;
    }
    };
    var favanzar = function(e) {
        if (loaded){
            video.currentTime = video.currentTime + 10;  
    }
    };
    var fretroceder = function(e) {
       if (loaded){
            video.currentTime = video.currentTime - 10;
        }
    };
    
    var ffin=function(e){
    	if(loaded){
    		video.currentTime=video.duration;
    	}
    };
     var fprogress=function(e){
    	if(loaded){
    		progress.value=video.currentTime/video.duration*100;
    	}
    };
    var fvolumen=function(e){
    	player.volume=this.value/100;
    };
    var chageVideo=function (e){
    	var src=e.target.dataset.src;
    	parafn(e);
    	if(modernizr.video.h264){
    		player.src=src+".mp4"
    	}else{
    		player.src=src+".webm"
    	}
    	video.load();
    }
    video.addEventListener('canplay', fcanplay, false);
    iniciar.addEventListener('click', finiciar, false);
    pausar.addEventListener('click', fpausar, false);
    parar.addEventListener('click', fparar, false);
    avanzar.addEventListener('click', favanzar, false);
    retroceder.addEventListener('click', fretroceder, false);
    video.addEventListener('timeupdate',fprogress,false);
    volumen.addEventListener('change',fvolumen,false);


};
