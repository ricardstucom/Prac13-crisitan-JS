<?php

session_start();
/*
  if(isset($_POST['lista'])&& isset($_SESSION['array'])){
  echo json_encode($_SESSION["array"]);
  exit();

  }

 */

if (!isset($_SESSION["array"])) {
    $arr[0][0] = $_POST['nombre'];
    $arr[0][1] = 0;
    $_SESSION["array"] = $arr;
}
$resp="{";
//{"nom":"punts","nom2":"punts"}
//for ($i = 0; $i< count($_SESSION['array']); $i++) {
//   //$resp.='{"'.$_SESSION[$i][0].':'.$_SESSION[$i][1].'"';
//    
//}
   // $respuesta = '{"posicion":"' . 0 . '"}';
    // echo $_SESSION["array"][0][0];
   // echo $respuesta;

    //   echo $_SESSION["array"][0][0];
    if ($_POST["puntuacion"] == 0) {
        $resultado = count($_SESSION["array"]);
        $_SESSION["array"][$resultado][0] = $_POST['nombre'];
          $_SESSION["array"][$resultado][1] = 0;

//        $respuesta = '{"posicion":"' . $resultado . '","nombre":"'.$_POST['nombre'].'"}';
//        echo $respuesta;
        
        
        
    


   $respuesta ="{";
        
        for ($i = 0; $i< count($_SESSION['array']); $i++) {
          
  
      
  
    //$respuesta .= '"posicion":"' . $resultado . '","nombre":"'.$_POST['nombre'].'"';
      $respuesta .= '"'.$_SESSION['array'][$i][0].'":"'.$_SESSION['array'][$i][1].'",';

        }
           $respuesta .='"":""}';
           echo $respuesta;
        
    } else {
        $resultado = $_POST['puntuacion'];
        $_SESSION["array"][$resultado][1] = $_POST['puntuacion'];
        echo $resultado;
    }

if (isset($_POST['lista']) && isset($_SESSION["array"])) {
    
}
//echo $_SESSION["array"][$resultado][0];
?>