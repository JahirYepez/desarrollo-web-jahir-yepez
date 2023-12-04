function enviarDatos() {
    var edad = document.getElementById('yepez-edad').value;
    var sexo = document.getElementById('yepez-sexo').value;
    var educacion = document.getElementById('yepez-educacion').value;
    var ocupacion = document.getElementById('yepez-ocupacion').value;

    var datos = {
        edad: edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion: ocupacion
    };
    mostrarResultados(datos);
}

function mostrarResultados(datos) {
    var url = 'resultado-jahir-yepez.html';
    url += '?edad=' + encodeURIComponent(datos.edad);
    url += '&sexo=' + encodeURIComponent(datos.sexo);
    url += '&educacion=' + encodeURIComponent(datos.educacion);
    url += '&ocupacion=' + encodeURIComponent(datos.ocupacion);
    window.location.href = url;
}