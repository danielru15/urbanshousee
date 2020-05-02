<?php 
$destino="simonsanchez89@gmail.com";
$nombre = $_POST["nombre"];
$asunto = $_POST["asunto"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " .$nombre . "\asunto" .$asunto . "\correo" .$correo . "\mensaje" . $mensaje;
mail ($destino,"contacto", $contenido);

?>