window.onload = function() {

    var lista = document.getElementById("lista");
    var button = document.getElementById("button");
    var lis = document.querySelector('li');
    var anade = function(event) {
        //para que no se propague a los elementos superiores
        //del arbol
        event.stopPropagation();
        if (lista) {

            li = document.createElement('li');
            //li.addEventListener('click', remove, false);
            li.innerText = "Elemento nuevo";
            lista.appendChild(li);

        }

    };
    var log = function() {
        console.log('Click on ' + this + " on " + new Date());
    };
    var remove = function(event) {
        // console.log(event.target);
        // console.log(event.srcElement);
        if (confirm('Seguro que desea eliminar este elemento?')) {
            //event.target: elemento que que ha generado el evento
            this.parentNode.removeChild(event.target);
        }
    };

    if (button) {
        button.addEventListener('click', anade, false);
    }
    /*if (lis.length) {
        for (var i = lis.length - 1; 1 >= 0; i--) {
            //si le pasas remove(li[i]), la funcion se ejecurara
            //automantica mente el elemento de la funcion sera el elemento
            //que lanza el evento:
            //remove.call(lis[i])
            lis[i].addEventListener('click', remove, false);
        }
    }*/
    if (lista) {
        lista.addEventListener('click', remove, false);
    }
    document.addEventListener('click',anade,false);
};
/*
    var new_li = "<li>Nuevo en lista " + (lista.childElementCount + 1) + "</li>";
    lista.innerHTML = lista.innerHTML + new_li;
*/
