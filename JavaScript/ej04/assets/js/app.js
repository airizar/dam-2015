(function(){
	var mayusMinus=function(texto){
		var minus=0;
		var mayus=0;
		var ind=0;
		var msg="texto en: ";
		if(typeof texto === 'string'){
			if(texto===texto.toLowerCase()){
				return 'Minus';
			}else if(texto===texto.toUpperCase()){
				return 'mayus';
			}else{
				return 'mix';
			}
		}
		else{
			throw Error('No es un string');
		}
	};
	console.log(mayusMinus("kas aslkjfo aslkjdf")==='Minus');
	console.log(mayusMinus("SDLK AJSDFÑ AJDFPOI SADFLK")==='mayus');
	console.log(mayusMinus("DASDF FDasñlkdfl asdflk")==='mix');
	try{
		console.log(mayusMinus());
		}catch(e){
		console.log(e);
	}
	try{
		console.log(mayusMinus({}));
		}catch(e){
		console.log(e);
	}
	try{
		console.log(mayusMinus(null));
		}catch(e){
		console.log(e);
	}	
	try{
		console.log(mayusMinus(0));
		}catch(e){
		console.log(e);
	}
	try{
		console.log(mayusMinus(function(){}));
		}catch(e){
		console.log(e);
	}
})();
