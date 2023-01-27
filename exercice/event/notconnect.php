<?php
class notconect{
    private $bd;
    public function __construct($bd){
        $this->bd = $bd;
    }
    public function affichtable(){
        $query =$this->bd->query("SELECT * FROM `produit` WHERE 1");
        echo "<table>";
        echo "<tr><th>nom</th><th>description</th><th>image</th></tr>";
        foreach($query as $row){
            include("code_html/notconnection/article.php");
        }
        echo "</table>";
    }
}