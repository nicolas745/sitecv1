<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
include("event/index.php");
$event = new event();
$event->mysql('localhost','handigital','root','');
?>
<!DOCTYPE html>
<html lang="fr">
<?php
include ("code_html/stucture_page/head.php");
?>
<body>
    <?php
    if($event->isconnect()){
        $con = $event->connect();
        $con->affichemenu();
        if(isset($_GET['article'])){
            $con->modifdata();
            $con->Affichage_Html_Modifier(); // code html pour modifier les article
        }else{
            $con->supridata();
            $con->ajoutdata();
            $con->affichtable();//afficher un table ou il y a la liste des produit
            $con->affichform();
        }
    }else{
        $notco = $event->notconect();
        $notco->affichemenu();
        $notco->affichtable(); //afficher un table ou il y a la liste des produit
    }
    ?>
</body>
</html>