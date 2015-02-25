window.onload=function(){
	 var  enlace=document.querySelectorAll(".enlace");
	 var span=document.querySelectorAll('.adicional.oculto');
	 var spanv=document.querySelectorAll('.adicional.visible');

	 //onclick="muestra(); return false;" Utilizando esto como la funcion esta
	 //dentro de una funcion no es visible desde fuera.
	
	 var muestra=function(){
	 	//elimina la clase 'oculto'
	 	if (enlace.classList.contains("ocultar"))
	 	{if(span.length){
	 		span[0].classList.remove("oculto");
	 		span[0].classList.add("visible");
	 	}
	 	
	 	if(span.length){
	 		enlace[0].classList.remove("ocultar");
	 		enlace[0].classList.add("mostrar");
	 	}
	 }else{
	 	if(span.length){
	 		span[0].classList.remove("visible");
	 		span[0].classList.add("oculto");
	 	
	 	if(span.length){
	 		enlace[0].classList.remove("mostrar");
	 		enlace[0].classList.add("ocultar");
	 		
	 	}
	 }
	 }
	 	
	 };
	if(enlace.length){
		enlace[0].addEventListener('click',muestra,false);
	}
};
