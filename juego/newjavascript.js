$(document).ready(iniciar);
var ship = $("<img id='foto' src='Rajoy.png'/>");
var points = 0;
var interval;
 //var m = $("<img id='y' class='meteorito' src='lib/Nazi.jpg'/>");
function iniciar(){
    $("#boton").click(Ajax);
    $("#espai").append(ship);
   $("#foto").css("height","100px");
    $("#start").click(initGame);
    
}
   


    
    function Ajax(){
       
        
        var nombre = $("#texto").val();
        var puntuacion = $("#puntuacion").val();
         $.ajax({
        type: "POST",
        url: "newEmptyPHP.php",
        dataType: "json",
        data:{
            "nombre": nombre,
            "puntuacion": puntuacion
            
        },
        success: function (respuesta) {
             
                var elemento="<ul>";
            for(var nombre in respuesta){
                console.log(respuesta[nombre]);
                console.log(nombre);
                 elemento +="<li>"+"Nombre: "+nombre+"</li><li>"+"Puntuación: "+respuesta[nombre]+"</li></br>";
               
                
                
            }
             elemento+="</ul>";
            $("#tabla").append(elemento);
            
            $("#espai").fadeOut(0);
            $("#escudo").fadeOut(0);
            $("#puntuacion").fadeOut(0);
            $("#restart").fadeOut(0);
            //$("#espai").fadeIn(100);
            $("#start").fadeIn(100);
             $("#input").fadeOut(100);
             //$("#escudo").fadeIn(100);
             //$("#puntuacion").fadeIn(100);
         $("#login-modal").fadeOut(0);
             $(".loginmodal-container").fadeOut(0);
             $(".loginmodal-container").fadeOut(0);
             $(".modal-backdrop").fadeOut(0);
             
        }
            
       
    });
}
function initGame() {
 
   
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:
                ship.stop().animate({
                    left: '-=10px'
                }); //left arrow key
                break;
            case 38:
                ship.stop().animate({
                    top: '-=10px'
                },1); //up arrow key
                break;
            case 39:
                ship.stop().animate({
                    left: '+=10px'
                 },1); //right arrow key
                break;
            case 40:
                ship.stop().animate({
                    top: '+=10px'
                 },1); //bottom arrow key
                break;
            case 87:
                ship.stop().animate({
                    top: '-=10px'
                },1); //w key
                break;
            case 65:
                ship.stop().animate({
                    left: '-=10px'
                 },1);//a key
                break;
            case 83:
                ship.stop().animate({
                    top: '+=10px'
                 },1); //s key
                break;
            case 68:
                ship.stop().animate({
                    left: '+=10px'
                 },0.1);//d key
                break;
        }
        
    });
     asteroidLoop();
    $("#espai").fadeIn(0);
            $("#escudo").fadeIn(0);
            $("#puntuacion").fadeIn(0);
            $("#tabla").fadeOut(0);
    }
    function setPropertiesAsteroid(asteroid, random) {
        console.log($("#espai").css("width"));
    asteroid.css({
        "position": "absolute",
        "width": "80px",
        "height": "80px",
        "top": random + "px",
        "left":parseInt( $("#espai").css("width"))
    });
}
    function asteroidLoop() {
    interval = setInterval(moveAsteroid, 1000);
}
    function moveAsteroid() {
    //consulta ajax y con la respuesta generar el meteorito.
    $.ajax({
        type: "POST",
        url: "asteroide.php",
        dataType: "json",
        data: {height: $("#espai").css("height")},
        success: function (response) {
            //alert(response.random);
            var asteroid = $("<img id='asteroide' src='pablo-iglesias.png'/>");
          
            setPropertiesAsteroid(asteroid, response.random);
            
            $("#espai").append(asteroid);

            asteroid.animate(
                    {
                        "left": "0"
                    },
                    {
                        duration: 2500,
                        step: function (now, fx) {
                           
                            $("#puntuacion").html(points);
                          
                            if ($(asteroid).hittest($(ship))) {
                                asteroid.remove();
                                $("#escudo").animate({
                                    "width": "-=20"
                                },
                                        {
                                            step: function (now, fx) {
                                                if ($("#escudo").width() === 0) {
                                                    clearInterval(interval);
                                                    ship.stop();
                                                     $("#escudo").fadeOut(0);
                                                    window.clearInterval(interval);
                                                    alert("GAME OVER");
                                                }
                                            }
                                        });
                            }
                        },
                        complete: function () {
                            points++;
                            asteroid.remove();
                        }
                    });
        }
    });
}
    


 
    
   
