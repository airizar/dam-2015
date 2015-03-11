// $(function(){
// 	var $ticker=$('#ticker');
// 	var peticionAjax=function(){


// 	//nunca var x=$.ajax es asincrono siempre null
// 	$.ajax('../servidor/generaContenidos.php',{
// 		//para enviar datos
// 		data:{
// 			user:'user',
// 			pass:'1234'
// 		},
// 		method:'POST',
// 		success: function(data,status,jqXHR){
// 			$ticker.text(data);
// 		}

// 		});
// 	};
// 	setInterval(peticionAjax,1000);

//   });
$(function() {
    var $ticker = $('#ticker');
    var peticionAjax = function() {
        //cuando quieres utilizar las opciones por defecto de la funcion
        $.get('../servidor/generaContenidos.php', null, function(data) {
            $ticker.text(data);
        });


    };
    //esta funcion y el timeout devuelven un codigo, 
    //este codigo sera util para parar el intervalo, que es un identificador
    var interval = setInterval(peticionAjax, 1000);
    //para parar el intervalo
    $('#detener').on('click', function() {
        clearInterval(interval);
    });
    //pero habria que controlar el estado, si esta ejecutando 
    //peticiones o no
    // $('#play').on('click', function() {
    //     interval = setInterval(peticionAjax, 1000);
    // });


});
