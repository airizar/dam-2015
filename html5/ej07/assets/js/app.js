window.onload = function() {
    var input = document.getElementById("number");
    var button = document.getElementById("calcular");
    var numbers = document.getElementById("numbers");
    var worker = new Worker('assets/js/primes.js');
    calcular.addEventListener('click', function(e) {
        e.preventDefault();
        var num = input.value;
        worker.postMessage(num);
    }, false);
    worker.addEventListener('message', function(e) {
        var primes = e.data;
        numbers.innerHTML = primes.join(" ");
    });
};
