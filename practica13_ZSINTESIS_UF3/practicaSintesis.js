window.onload = inicio;

function inicio() {

    //Quan l’usuari situï el ratolí sobre la imatge, es demanarà per AJAX una pista sobre
    //la pregunta que se li farà.

    document.getElementById("pista").style.visibility = "hidden";
    document.getElementById("pregunta").style.visibility = "hidden";
    document.getElementById("respuesta1").style.visibility = "hidden";
    document.getElementById("respuesta2").style.visibility = "hidden";
    document.getElementById("empezar").addEventListener("click", rutaAjaxImagen, false);
    //document.getElementById("").addEventListener("click", rutaAjaxImagen, false);


}

function rutaAjaxImagen() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "resp.php?ruta=si");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var respuestaJSON = JSON.parse(xmlHttp.responseText);

            var ruta = respuestaJSON.ruta;
            var img = "<img id='img' src='" + ruta + "'/>";
            var divImagen = document.getElementById("imagen");
            divImagen.innerHTML = img;
            divImagen.addEventListener("mouseover", addNewPista, false);
            divImagen.addEventListener("mouseout", addNewPregunta, false);
        }


    };
    xmlHttp.send(null);

}
function addNewPista() {

    document.getElementById("imagen").
            removeEventListener("mouseover", addNewPista, false);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "resp.php?pista=si");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var respuestaJSON = JSON.parse(xmlHttp.responseText);

            document.getElementById("pista").style.visibility = "visible";

            document.getElementById("pista").innerHTML = respuestaJSON.pista;

            // var divImagen = document.getElementById("imagen");
            // divImagen.addEventListener("mouseOut", addNewPregunta, false);
        }

    };

    xmlHttp.send(null);
}

function addNewPregunta() {

    document.getElementById("imagen").
            removeEventListener("mouseout", addNewPista, false);

    console.log("pedimos pregunta");

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "resp.php?pregunta=si");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var respuestaJSON = JSON.parse(xmlHttp.responseText);

            document.getElementById("pregunta").style.visibility = "visible";
            document.getElementById("respuesta1").style.visibility = "visible";
            document.getElementById("respuesta2").style.visibility = "visible";
            document.getElementById("imagen").style.visibility = "hidden";
            document.getElementById("pregunta").innerHTML = respuestaJSON.pregunta;
            document.getElementById("respuesta1").innerHTML = respuestaJSON.primera;
            document.getElementById("respuesta2").innerHTML = respuestaJSON.segunda;


            var respuesta1 = document.getElementById("respuesta1");
            respuesta1.addEventListener("mouseover", check1, false);
            var respuesta2 = document.getElementById("respuesta2");
            respuesta2.addEventListener("mouseover", check2, false);
        }


    };
    xmlHttp.send(null);
}

function check1(){
    
    document.getElementById("respuesta1").style.color="red";
    document.getElementById("imagen").style.visibility = "visible";
    
}
function check2(){
     document.getElementById("respuesta2").style.color="green";
     document.getElementById("imagen").style.visibility = "visible";
}