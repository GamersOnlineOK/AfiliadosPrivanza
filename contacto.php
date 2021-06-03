<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["FNAME"]) || !isset($_POST["EMAIL"]) || !isset($_POST["MMERGE7"]) || !isset($_POST["apell"]) || !isset($_POST["fuer"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}
$nombre = $_POST["FNAME"];
$email = $_POST["EMAIL"];
$mensaje = $_POST["MMERGE7"];
$apellido = $_POST["apell"];
$fuerza = $_POST["fuer"];


// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c1910720.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "info@privanza.com.ar";  // Mi cuenta de correo
$smtpClave = "Mitre@407";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@privanza.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Formulario de contacto PRIVANZA"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "Nombre: {$nombre} <br>Telefono:{$apellido}<br>Email: {$email}<br>Fuerza: {$fuerza} <br>{$mensajeHtml} <br /><br />Bienvenido<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Desarrollado por Goweb"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}
