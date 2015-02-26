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
    // var validateForm=function(e){
    //     //aqui this es window

    //     //for(required)

    //     funcionRepetida.call(required item)
    // };
    
    // var validateField=function(e){
    //     forI()
    //     this.call(this)
    // };

    /*1.-ha esta funcion se le llama desde un formulario, asi que this, sera el 
    formulario que le llama*/

    this.addEventListener('submit', validateForm, false);
    for (var i = 0; i <=required.length-1; i++) {
        required[i].addEventListener('blur',validateField,false);  
            }

};

/*
funcionrepetida(e)
errors[]
if checkbox and !cheked{
    errors push
   } else if password{
        if not validate password
            error push
    } else { if not required
                error push()
                }
   }
if(errors.length){
    showError.call(this,erros.join('\n'));
}
   var showError=function(msgerror){
    createelement span
    span claslistadd helpblock
    span innertext msgerror

    this.parentnode.classlist.add('has-error');
    this.parentnode.querySelectorAll('.hidden').item(0).classlist.remove('hidden');

   }
*/