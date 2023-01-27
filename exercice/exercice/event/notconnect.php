<?php
class notconect{
    private $bd;
    public function __construct($bd){
        $this->bd = $bd;
    }
    public function affichemenu(){
        include("code_html/notconnection/menu.php");
    }
    public function affichtable(){
        $query = $this->bd->prepare("SELECT * FROM `produit` WHERE 1  OFFSET ? ");
        if (isset($_GET['page'])) {
            $query->execute([$_GET['page']*10]);
        } else {
            $query->execute([0]);
        }
        echo "<table>";
        include("code_html/notconnection/titre_table_article.php");
        while($row=$query->fetch()){
            echo "";
            include("code_html/notconnection/article.php");
        }
        echo "</table>";
    }
}