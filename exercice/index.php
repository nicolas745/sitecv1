<?php
include("code_php/submitconnection.php");
$connection = new connection();
$connection->mysql('$host','$bd','root','');
$connection->actionco(); //verifi l'action de se connecter
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="article.php">article</a>
    <?=$connection->message?>
    <form method="post">
        <p>username</p><input name="user">
        <p>password</p><input name="password">
        <input type="submit" name="submit">
    </form>
</body>
</html>