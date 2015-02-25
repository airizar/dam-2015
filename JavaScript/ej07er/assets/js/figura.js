var App = App || {
    Model: {}
};
App.Model.Figura = (function() {
    //var Figura=(function(){
    //Atributos
    var _x,
        _y;

    function Figura(x, y) {
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof x === 'number') ? y : 0;

        /*if(typeof x==='number'){
			this.x=x;
			this.y=y;			
		}else{
			this.x=0;
			this.y=0;
		}*/
    }

    //getters
    Figura.prototype.getX = function() {
        return _x;
    };
    Figura.prototype.getY = function() {
        return _y;
    };
    //Setters
    Figura.prototype.setX = function(x) {
        _x = (typeof x === 'number') ? x : _x;

    };
    Figura.prototype.setY = function(y) {
        _y = (typeof x === 'number') ? y : _y;
    };
    Figura.prototype.move = function(x, y) {
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof x === 'number') ? y : 0;
    };

    return Figura;
})();
