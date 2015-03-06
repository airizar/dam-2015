window.onload = function() {
    //hacerlo mas general para no tener que modificar
    var inputs = document.querySelectorAll("input,textarea");
    var storage = localStorage;
    //para no machacar keys del mismo dominio
    var prefix = "ej03_prefix";
    var saveText = function(e) {
        storage.setItem(prefix + this.name, this.value);
    };
    for (var i = inputs.length - 1; i >= 0; i--) {
        inputs.item(i).addEventListener('input', saveText);
    }
    var showData = function(key, value) {
        for (var i = inputs.length - 1; i >= 0; i--) {
            var name = key.replace(prefix, "");
            if (inputs.item(i).name === name) {
                inputs.item(i).value = value;
            }
        }
    };
    if (storage.length) {
        for (var j = storage.length - 1; j >= 0; j--) {
            var key = storage.key(j);
            showData(key, storage.getItem(key));
        }

    }
    var update = function(e) {
        showData(e.key, e.newValue);
    };
    window.addEventListener('storage', update, false);

    /*var texto = document.getElementById("texto");
    var textoSession = document.getElementById("textoSession");
    if (localStorage.getItem("texto")) {
        texto.value = localStorage.getItem("texto");
    }else{
    	texto.value="";
    }
    console.log(texto);
    var saveData = function(e) {
        localStorage.setItem('texto', this.value);

    };
    var saveSessionData = function(e) {
        sessionStorage.setItem('texto', this.value);

    };
    var update=function(e){
    	if(e.newValue){
    	 	texto.value=e.newValue;
    	 }else{
    	 	texto.value="no hay valor";
    	 }
    };

    texto.addEventListener("keyup", saveData, false);
    textoSession.addEventListener("keyup", saveSessionData, false);
    window.addEventListener('storage',update,false);*/
};
