window.onload = function() {
    // Solicitar información al usuario y almacenarla en cookies
    var idioma = prompt("Por favor ingresa tu idioma (español, inglés, ...)") || "español";
    var tema = prompt("Por favor ingresa tu tema (oscuro, claro, ...)") || "oscuro";
    var usuario = prompt("Por favor ingresa tu nombre de usuario") || "usuario";
    var preferencia = prompt("Por favor ingresa tu preferencia (alta, baja, ...)") || "alta";
    var ultimaVisita = new Date().toString();
    
    document.cookie = `idioma=${idioma}; max-age=10`;
    document.cookie = `tema=${tema}; max-age=15`;
    document.cookie = `usuario=${usuario}; max-age=20`;
    document.cookie = `preferencia=${preferencia}`;
    document.cookie = `ultimaVisita=${ultimaVisita}`;

    // Mostrar cookies vigentes cada 2 segundos
    setInterval(function() {
        var cookiesList = "";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            cookiesList += cookies[i] + "<br>";
        }
        document.getElementById("cookies").innerHTML = cookiesList;
    }, 2000);

    // Borrar cookies en la segunda visita
    var visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
    if (visitCount > 0) {
        document.cookie = "preferencia=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "ultimaVisita=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    localStorage.setItem("visitCount", visitCount + 1);
};
