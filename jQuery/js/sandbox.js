// $(document).ready(){
// 	forma tradicional
// }
$(function() {

    /*Seleccionar todos los elementos div que poseen la clase "module".*/
    var $divs = $('div.module');
    /*Especificar tres selecciones que puedan seleccionar el tercer 
    ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?*/
    var $li = $('#myList li:nth-child(3)');
    var $lis = $('#myList > li');
    /*AÑADIR  EVENTOS LIS-->para añadirles a los nuevos tambien, mirar abajo*/
    /*$lis.on('click mouseover',function(e){
    	console.log(e);
    	console.log(this);
    });*/
    //tercer li
    console.log($lis.eq(2));
    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));
    /*Seleccionar el elemento label del elemento input utilizando un selector de atributo.*/
    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');
    console.log($label);
    /*Averiguar cuantos elementos en la página están ocultos (ayuda: .length)*/
    var $hidden = $(':hidden');
    //for de jquery
    $hidden.each(function(idx, elem) {
        //el Elemento elem si es el objeto de javascript, al ponerle el $(wrapper)
        //lo convierte a objeto jQuery
        $(elem).show();
        //	console.log(elem);
    });
    /*Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.*/
    var $imgs = $('img');
    $imgs.each(function(idx, elem) {
        console.log(elem.alt);
        //no tiene sentido
        //console.log($(elem).attr('alt'));
        /*Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.*/
        //vete subiendo por todos tus padres hasta que te encuentres
        //el selector que te indico. 
        $input.closest('form').addClass('form');
        //$input.closest('form').remove('form');
        //si tiene se lo quita y si no se lo pone
        //$input.closest('form').toogle('form');
    });
    /*Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y 
    remover dicha clase en el elemento; luego añadir la clase "current" al siguiente 
    ítem de la lista.*/
    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');
    /*Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit*/
    var $submit = $('#specials select')
        .closest('ul')
        .find('input[typw="submit"]');
    /*Seleccionar el primer ítem de la lista en el elemento 
    #slideshow; añadirle la clase "current" al mismo 
    y luego añadir la clase "disabled" a los elementos hermanos.*/
    //tenemos una lista de hermanos y si hacer each les pone a todos la clase.
    ///En este caso lo hace asi(lo indica en la documentacion), pero no tiene porque
    //MIRAR SIEMPRE LA DOCUMENTACION
    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');
    /*Añadir 5 nuevos ítems al final de la lista desordenada #myList.*/
    /*NO USAR FOR PARA ESTOS CASOS REPINTA */
    var lis = [];
    for (var i = 0; i < 4; i++) {
        lis.push('<li>Element ' + i + '</li>');
    }
    $ul.append(lis.join(''));
    /*Remover los ítems impares de la lista.*/
    $ul.find('li:odd').remove();
    /*FORMAs ELEGANTEs DE GENERAR ELEMENTOS EN JQUERY*/
    $li = $('<li/>', {
        class: 'current',
        text: 'Node list',
        id: 'myli'
    });
    $ul.append($li);
    $li2= $('<li/>', {
        class: 'current1',
        text: 'Node list2',
        id: 'myli1'
    });
    $li2.appendTo($ul);
    $ul.on('click','li',function(e){
    	console.log(e);
    	console.log(this);
    });

});
