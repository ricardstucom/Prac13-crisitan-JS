<?php

session_start();


$pokemons = array(
    "planti" => array("nombre" => "Bulbasur",
        "nick" => "planti",
        "evolucion" => ["Ivysur"],
        "tipo" => ["planta", "veneno"])
    , "chipi" => array("nombre" => "Ivysaur",
        "nick" => "chipi",
        "evolucion" => ["Venusaur"],
        "tipo" => ["planta", "veneno"]));
//según la diapo anterior, recibiremos una URI del estilo:  resp.php/pokem/Bulbasur
//obtenemos si se ha realizado un GET, POST, PUT o DELETE

if (!isset($_SESSION["pokemons"])) {
    $_SESSION["pokemons"] = $pokemons;
} else {
    $pokemons = $_SESSION["pokemons"];
}

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        //creamos un array de 2 elementos. 1º con la URI hasta pokem/ , 2º con el resto (el id Bulbasur)
        // extraemos el id (Bulbasur)



        if (empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])) {
            echo json_encode($pokemons);
        } else {
            // get the ID
            $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
            // devolvemos la info de ese pokemon en formato json
            echo json_encode($pokemons[$id]);
        }
        //retornamos la info del poke correspondiente en formato jSON
        break;

    case "PUT": //actualizar un pokemon
        //obtenemos la id del pokemon que queremos actualizar
        $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
        // Para capturar los datos entrada JSON que viene en el request HTTP:
        $jsonPoke = json_decode(file_get_contents("php://input"), false);

        $pokemons[$jsonPoke->nombre] = $jsonPoke;
        echo json_encode($pokemons);
        break;

    case "POST":


        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $pokemons[$jsonPoke->nick] = $jsonPoke;
        echo json_encode($pokemons);
        break;


    case "DELETE":
        $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];

        // echo $id;
        unset($pokemons[$id]);
        echo json_encode($pokemons);
        break;
}
$_SESSION["pokemons"] = $pokemons;
