/*Para que la function form.validate este accesible en cualquier
formulario hay que añadirle al prototipo (padre) del elemento 
formulario(HTMLFormElement) la funcion validate */

HTMLFormElement.prototype.validate = function() { /*objeto utilidades*/
    /*validador es un objeto con diferentes metodos, por lo que se pueden 
    utilizar this para usar los demas metodos */
    var validador = {
        required: function(val) {
            var required = true;
            switch (val.type) {
                case "text":
                    {   
                        required = !(val.value==="" || val===undefined || val===null || val===/^\s+$/);
                        break;
                    }
                case "checkbox":
                    {
                        required = val.checked;
                        break;
                    }

                default:
                    {
                        break;
                    }
            }
            return required;
        },
        email: function(val) {
            var prueba=/\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(val.value);
            return /\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(val.value);
        },
        maxLong: function(val) {
            return (val.length > 50);
        },
        /*El password debe tener una longitud mínima de 6 caracteres,
         y contener al menos una letra minúscula, una letra mayúscula 
         y un dígito.
        */
        password: function(val) {
            return val.length>6 &&/[a-z]/.test(val)&&/[A-Z]/.test(val)&&/[0-9]/.test(val) && this.required(val);
        }
    };
    /*2.-Obtenemos todos los campos required
     */
    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.email');
    var msgError = {};
    var validate = function(e) {
        console.log("validando formulario");
        /*Si hay errores*/
        //e.preventDefault
        var count=required.length;
        for (var i = 0; i <=required.length-1; i++) {
            if (!validador.required(required[i])) {
                
                    msgError.push("El campo " + required[i].id+ " es obligatorio");
                    
                }
            }
            //Si lo hago de este modo tendria que tener diferentes validadores
            //required para cada tipo input
            // switch (required[i].type) {
            //     case "text":
            //         if (!validador.required(required[i].innerText)) {
            //             //añadir error
            //             msgError.push("El campo " + required[i].id);
            //         }  
            //         break;    
            // }
        var countMail=email.length;
        for (var i = 0; i <=email.length-1; i++) {
            if (!validador.email(email[i])) {
                    
                    //msgError[email[i].id]=("El campo " + email[i].id+ " no tiene el formato correcto");
                     msgError.push("El campo " + email[i].id+ " no tiene el formato correcto");
                    
                }
            }
        if(msgError.length>0){
            e.preventDefault();
            console.log(msgError);
        }

    };


    /*1.-ha esta funcion se le llama desde un formulario, asi que this, sera el 
    formulario que le llama*/

    this.addEventListener('submit', validate, false);
    for (var i = 0; i <=required.length-1; i++) {
        required[i].addEventListener('blur',validateField,false);  
            }

};



/*

*/





