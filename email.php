<?php
    $sendto="paola.e.vizcarra@gmail.com";
    $emailsubject="Response from my web site.";

    $visitorName=stripslashes($_POST['visitorName']);
    $visitorEmail=stripslashes($_POST['visitorEmail']);
    $comments=stripslashes($_POST['comments']);
    $redirect = "home.html"; 

    mail("$sendto",
    "$emailsubject",
    "\r\nName: $visitorName\r\nEmail: $visitorEmail\r\nComments: $comments",
    "From: $visitorName <$visitorEmail>");
    header("Location: $redirect");      
?>

