<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
include("event/index.php");
$event = new event();
$event->mysql('localhost','Handigital','nicolas745','&Qwxsz18349276');
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="connection"></a>
    <?php
    if($event->isconnect()){
        $con = $event->connect();
        echo "<a href='event/deconection.php'>deconection</a>";
        if(isset($_GET['article'])){
            $con->modifdata();
            $con->Affichage_Html_Modifier();
        }else{
            $con->supridata();
            $con->ajoutdata();
            $con->affichtable();
            $con->affichform();
        }
    }else{
        echo '<a href="index.php">conection</a>';
        $notco = $event->notconect();
        $notco->affichtable();
    }
    ?>
</body>
</html>