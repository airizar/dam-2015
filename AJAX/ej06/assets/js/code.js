$(function() {
    var options = [],
        optionsMun = [];
    $.getJSON('servidor/cargaProvinciasJSON.php', function(data, status, jqXHR) {
        console.log(data);
        options.push(new Option("Selecciona una provincia", null));
        for (var cp in data) {
            options.push(new Option(data[cp], cp));
        }
        $('#provincias').children().remove();
        $('#provincias').append(options);
        $('#municipios').removeAttr('disabled');

    });
    $('#provincias').on('change', function() {
        $.ajax('servidor/cargaMunicipiosJSON.php', {
            //para enviar datos
            data: {
                provincia: $('#provincias').val()
            },
            method: 'POST',
            success: function(data, status, jqXHR) {
                $('#municipios').children().remove();
                optionsMun = [];
                //en vez de parsear se podria haber añadido el datatype:'json'
                var jsonData = (JSON.parse(data));
                for (var mun in jsonData) {
                    optionsMun.push(new Option(jsonData[mun], mun));
                }
                $('#municipios').append(optionsMun);
            }

        });


    });
});
