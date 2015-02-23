(function(){
	var esPalindromo=function(orig){
		if (typeof orig==='string'){
		//quitar espacios laterales, paso a minusculas
		/*Expresion regular:
			/\s/g 
			\s: espacio
			g:todas las que encuentre
		*/
		var tmp=orig.trim()
					.toLowerCase()
					.replace(/\s/g,'')
					.split('')
					.reverse()
					.join('');
		
		return tmp===orig.trim
					.toLowerCase()
					.replace(/\s/g,'');
		}else{
			return false;
		}
	};
	console.log(esPalindromo('  radar ')===true);
	console.log(esPalindromo(' JavaSc  ript')===false);
	console.log(esPalindromo('La ruta nos aporta otro paso natural')===true);
	console.log(esPalindromo());
	console.log(esPalindromo(0));
	console.log(esPalindromo({}));
	console.log(esPalindromo(null));
	console.log(esPalindromo(function(){}));
	console.log(esPalindromo());

})();
//dni.match(/^[0-9]{8}{a-zA-Z}$/);
