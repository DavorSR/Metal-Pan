<?php

if(isset($_POST['submit']){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];


    $mailTo = 'davor1012@gmail.com';
    $headers = "From: ".$mailFrom;
    $txt = "Dobili ste email od: ".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $headers) or die("Error!");
    
    header("Location: index.php?mailsend")
})
?>