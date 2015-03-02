var App = App || { Model : { } };
App.Model.Cuadrado=(function(){

	var _alto;

	function Cuadrado(x,y,alto){
		//java:super(x,y):Ejecuta el constructor figura como sifueras yo
		//App.Model.Figura.bind(this)(x,y)
		//App.Model.Figura.apply(this,[x,y]}
		App.Model.Figura.call(this,x,y);
		_alto=(typeof alto ==='number') ? alto : 0;
	}
	//Indicamos el padre
	Cuadrado.prototype=Object.create(App.Model.Figura.prototype);
	//Cuadrado.prototype.constructor=Cuadrado;
	
	
	Cuadrado.prototype.getAlto=function(){
		return _alto;
	};
	
	Cuadrado.prototype.setAlto=function(alto){
		_alto=(typeof alto ==='number') ? alto : _alto;
		
	};
	Cuadrado.prototype.getArea=function(){
		return Math.pow(_alto,2);
		
	};
	
	return Cuadrado;
})();