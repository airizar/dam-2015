$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var content = $('#content');
    var input = document.getElementById('input');
    var span = document.getElementById('status');
    var countMessage = 0;

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador

    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    console.log(socket);
    // 2. Controlar posibles errores del servidor.
    var openMessage = function(e) {
        if (this.readyState === 1) {
            input.disabled = false;

        }
        console.log("Welcome - status " + this.readyState);
    };
    var errorMessage = function(e) {

        console.log("error message " + this.readyState);
    };
    var closeMessage = function(e) {

        console.log("Disconnected - status " + this.readyState);
    };
    socket.addEventListener('open', openMessage, false);
    socket.addEventListener('error', errorMessage, false);
    socket.addEventListener('close', closeMessage, false);

    // socket.onopen  = function(e){ log("Welcome - status "+this.readyState); };
    // socket.onclose = function(e){ log("Disconnected - status "+this.readyState); };
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    console.log(myColor);

    socket.onmessage = function(event) {
        var info;
        try {
            info = JSON.parse(event.data);
            console.log(info);
        } catch (ex) {
            console.log("error with json message." + e.data);
        }
        if (info) {
            switch (info.type) {
                case "color":
                    console.log("color: " + info);
                    myColor = info.data;
                    span.style.color = myColor;
                    span.innerText=myName+":";
                    break;

                case "history":
                    console.log("history: " + info);
                    for (var i = info.data.length - 1; i >= 0; i--) {
                        addMessage(info.data[i].author, info.data[i].text, info.data[i].color, new Date(info.data[i].time));
                    }
                    break;
                default:
                    console.log("message: " + info);
                    addMessage(info.data.author, info.data.text, info.data.color, new Date(info.data.time));
                    break;
            }
        }




        // if (data.action == 'joined') {
        //     initiliseChat();
        // } else {
        //     showNewMessage(data.who, data.text);
        // }
    };
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {

    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.


    var sendMessage = function(e) {
        if (e.keyCode === 13) {
            var inputMessage = input.value;

            if (inputMessage) {
                if (!myName) {
                    myName = inputMessage;
                }
                socket.send(inputMessage);
                console.log(inputMessage);
                input.value = "";
            }

        }
    };
    input.addEventListener('keydown', sendMessage, false);



    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
