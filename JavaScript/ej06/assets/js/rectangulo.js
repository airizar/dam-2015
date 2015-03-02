var App = App || { Model : { } };
App.Model.Rectangulo=(function(){

	var _ancho;
	Cuadrado=App.Model.Cuadrado;
	function Rectangulo(x,y,alto,ancho){
		//java:super(x,y):Ejecuta el constructor figura como sifueras yo
		//App.Model.Figura.bind(this)(x,y)
		//App.Model.Figura.apply(this,[x,y]}
		App.Model.Cuadrado.call(this,alto,x,y);
		_ancho=(typeof ancho ==='number') ? ancho : 0;
	}
	//Indicamos el padre
	Rectangulo.prototype=Object.create(App.Model.Cuadrado.prototype);
	//Rectangulo.prototype.constructor=Rectangulo;
	
	
	Rectangulo.prototype.getAncho=function(){
		return _ancho;
	};
	
	Rectangulo.prototype.setAncho=function(ancho){
		_ancho=(typeof ancho ==='number') ? ancho : _ancho;
		
	};
	
	Rectangulo.prototype.getArea=function(){
		//this.getAlto():como el rectangulo no tiene el metodo getAlto,
		//ira a su prototipo a buscar la funcion hasta encontrarla
		return _ancho*this.getAlto();
		
	};
	Rectangulo.prototype.getAreaCuadrado=function(){
		//this.getAlto():como el rectangulo no tiene el metodo getAlto,
		//ira a su prototipo a buscar la funcion hasta encontrarla
		return Cuadrado.prototype.getArea.call(this);
		
	};
	
	
	return Rectangulo;
})();