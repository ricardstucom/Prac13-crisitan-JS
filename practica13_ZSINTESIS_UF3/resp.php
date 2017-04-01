<?php

session_start();

$_SESSION["pos"] = 0;

$imagenesReto = array("img/564.jpg", "img/567.jpg");
$empezar = array("si", "no");
$respuestas= array("A","D");

$respuesta = '{';

if (isset($_GET["ruta"])) {
    $posicion = rand(0, sizeof($imagenesReto) - 1);

    $_SESSION["pos"] = $posicion;
    $respuesta .= '"ruta":"' . $imagenesReto[$posicion] . '"';
}else if(isset($_GET["pista"])){
        
        $respuesta .= '"pista": "Pista: Prueba de fin a inicio"';
    }else if(isset($_GET["pregunta"])){
    $respuesta.='"pregunta":"Pregunta: Que coche llega primero","primera":"'.$respuestas[0].'","segunda":"'.$respuestas[1].'"';
        
    }


$respuesta .= '}';

echo $respuesta;
//$imagenes = array(
//    "1" => array("url" => "img/567.jpg",
//        "pista" => "El número es mayor que 5",
//           "pregunta" =>"Cuantas figuras hay en la imagen?",
//        "resp1" => "6",
//        "resp2" => "8")
//    , "2" => array("url" => "img/564.jpg",
//        "pista" => "Tiene las llantas negras",
//        "pregunta" =>"Que coche llega a la meta?",
//        "resp1" => "a",
//        "resp2" => "d")
//     ,"3" => array("url" => "img/568.jpg",
//        "pista" => "Contiene un liquido",
//           "pregunta" =>"Cuál es el símbolo que está repetido?",
//        "resp1" => "La taza",
//        "resp2" =>"Vaso"));
////según la diapo anterior, recibiremos una URI del estilo:  resp.php/pokem/Bulbasur
////obtenemos si se ha realizado un GET, POST, PUT o DELETE
//
//if (!isset($_SESSION["imagenes"])) {
//    $_SESSION["imagenes"] = $imagenes;
//} else {
//    $pokemons = $_SESSION["imagenes"];
//}
//
//switch ($_SERVER['REQUEST_METHOD']) {
//    case "GET":
//        //creamos un array de 2 elementos. 1º con la URI hasta pokem/ , 2º con el resto (el id Bulbasur)
//        // extraemos el id (Bulbasur)
//
//$random=rand(1,3);
//
////        if (empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])) {
////            echo json_encode($pokemons);
////        } else {
////            // get the ID
////            $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
////            // devolvemos la info de ese pokemon en formato json
////            echo json_encode($pokemons[$id]);
////        }
//        //retornamos la info del poke correspondiente en formato jSON
//        
//        if(!empty(explode("imagen/", $_SERVER['REQUEST_URI'])[1])){
//            
//            echo json_encode($imagenes);
//        }else{
//            echo json_encode($imagenes[$random]);
//        }
//        
//        break;
//
//    case "PUT": //actualizar un pokemon
//        //obtenemos la id del pokemon que queremos actualizar
////        $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
////        // Para capturar los datos entrada JSON que viene en el request HTTP:
////        $jsonPoke = json_decode(file_get_contents("php://input"), false);
////
////        $pokemons[$jsonPoke->nombre] = $jsonPoke;
////        echo json_encode($pokemons);
//        break;
//
//    case "POST":
//
//
////        $jsonPoke = json_decode(file_get_contents("php://input"), false);
////        $pokemons[$jsonPoke->nick] = $jsonPoke;
////        echo json_encode($pokemons);
//        break;
//
//
//    case "DELETE":
////        $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
////
////        // echo $id;
////        unset($pokemons[$id]);
////        echo json_encode($pokemons);
//        break;
//}
//$_SESSION["imagenes"] = $imagenes;
