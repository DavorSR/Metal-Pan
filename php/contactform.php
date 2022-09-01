<?php

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['email'];
$mailTo = 'dusan@metal-pan.rs';
$message = $_POST['message'];
$headers = "From:" . $mailFrom;
if(mail($mailTo,$subject,$message, $headers)) {
    echo "The email message was sent.";
    header("Location: https://metal-pan.rs/");
} else {
    echo "The email message was not sent. Vratite se na \n"
}

?>

