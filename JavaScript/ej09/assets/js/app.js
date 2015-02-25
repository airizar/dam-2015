window.onload=function(){
	 var  enlace=document.querySelectorAll(".enlace");
	 var span=document.querySelectorAll('.adicional.oculto');
	 //onclick="muestra(); return false;" Utilizando esto como la funcion esta
	 //dentro de una funcion no es visible desde fuera.
	 //si ponemos una direccion mostrara lo oculto y despues
	 //ira a google. para que no pase esto event
	 var muestra=function(event){
	 	event.preventDefault();
	 	//elimina la clase 'oculto'
	 	if(span.length){
	 		span[0].classList.remove("oculto");
	 	}
	 	if(span.length){
	 		enlace[0].classList.add("oculto");
	 	}
	 	
	 };
	if(enlace.length){
		enlace[0].addEventListener('click',muestra,false);
	}
};
