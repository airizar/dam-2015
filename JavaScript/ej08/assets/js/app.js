window.onload=function(){
	 var  enlaces=document.getElementsByTagName("a");
	// console.log(enlaces.length);
	// enlaces=document.querySelectorAll("a");
	// console.log(enlaces.length);

	 console.log(enlaces[enlaces.length-2].href);
	 var count=0;
	 for (var i = enlaces.length - 1; i >= 0; i--) {
 	if (enlaces.item(i).href==="http://prueba/");
			count++;
	 }
	 console.log("numero enlaces http:prueba: "+count);
	 enlaces=document.querySelectorAll("a[href^='http://prueba/']");
	 console.log("numero enlaces http:prueba: "+enlaces.length);

	var parrafos=document.querySelectorAll("p");
	console.log("numero parrafos :"+parrafos.length);
	if(parrafos.length>2){
		enlaces=parrafos[2].querySelectorAll("a");
		console.log("numero enlaces en 3er parrafo: "+enlaces.length);
	}
	console.log("numero enlaces en 3er parrafo: "+document.querySelectorAll("body>p:nth-child(3) a").length);
};


