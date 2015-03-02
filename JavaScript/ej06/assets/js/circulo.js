var App = App || { Model : { } };
App.Model.Circulo=(function(){

	var _radio;
	function Circulo(radio,x,y){
		//java:super(x,y):Ejecuta el constructor figura como sifueras yo
		//App.Model.Figura.bind(this)(x,y)
		//App.Model.Figura.apply(this,[x,y]}
		App.Model.Figura.call(this,x,y);
		_radio=(typeof radio ==='number') ? radio : 0;
	}

	
	//Indicamos el padre. El primero no lo muestra bien
	//Circulo.prototype=new App.Model.Figura();
	//Circulo.prototype.constructor=App.Model.Figura;
	Circulo.prototype=Object.create(App.Model.Figura.prototype);
	//Circulo.prototype.constructor=Circulo;

	Circulo.prototype.getRadio=function(){
		return _radio;
	};
	
	Circulo.prototype.setRadio=function(x){
		_radio=(typeof x ==='number') ? radio : _radio;
		
	};
	
	return Circulo;
})();