(function(){
var validarDNI = function(dni) {
    var msg;
    var letra;
    var ok = false;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    //es decir es diferente a 0,NAN
    var num = parseInt(dni);
    if (dni && typeof dni === "string" && dni.length) {
        if (num >= 0 && num <= 99999999) {
            var char = dni.charAt(length - 1).toUpperCase;
            ok = char === letras[num % 23];
        }
    }

    return ok;
};
//espacio en blanco
console.log(validarDNI("123456789A") === false);
console.log(validarDNI("72449047J") === false);
/*console.log(validarDNI("a")===false);
console.log(validarDNI("12345678A")===false);
console.log(validarDNI(undefined)===false);
console.log(validarDNI("12345679A")===false);
console.log(validarDNI({})===false);*/

})();
//dni.match(/^[0-9]{8}{a-zA-Z}$/);
