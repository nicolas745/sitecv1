<?php
include("event/submitconnection.php");
$connection = new connection();
$connection->mysql('localhost','handigital','root','');
$connection->actionco(); //verifi l'action de se connecter
?>
<!DOCTYPE html>
<html lang="en">
<?php
include ("code_html/stucture_page/head.php");
?>
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