<?php
include "data/index.php";
class connect{
    private $bd;
    public function __construct($bd){
        $this->bd = $bd;
    }
    
    public function get_data($id){
        return new data($id,$this->bd);
    }
    public function affichemenu(){
        include("code_html/connection/menu.php");
    }
    public function Affichage_Html_Modifier(){
        $query=$this->bd->prepare("SELECT * FROM `produit` WHERE `id`=?");
        $query->execute([$_GET['article']]);
        $data = $query->fetch();
        if(!$data){
            header("Location:?");
        }
        include("code_html/connection/form/modifier.php");
    }
    public function modifdata(){
        if(isset($_POST['submit'])){
            $nameimage = $this->get_data($_GET['article'])->get_image();
            if($_FILES['image']['size']){
                move_uploaded_file($_FILES['image']['tmp_name'],"image/".$nameimage);
            }
            $query=$this->bd->prepare("UPDATE `produit` SET `image`=:img , `nombre`=:nombre, `nom`=:nom , `contenu`=:con WHERE `id`=:id");
            $query->execute(array(
                ":img" =>$nameimage,
                ":nom"=>$_POST['nom'],
                ":con"=>$_POST['desc'],
                ":id"=>$_GET['article'],
                ":nombre" => $_POST['nombre']
            ));
        }
    }
    public function supridata(){
        if(isset($_POST['supr']) && isset($_POST['id'])){     
            $query = $this->bd->prepare("DELETE FROM `produit` WHERE `id`=?");
            $chemin_image = "image/".$this->get_data($_POST['id'])->get_image();
            if (is_file($chemin_image)) {
                unlink($chemin_image);
            }
            $query->execute([$_POST['id']]);
        }
    }
    public function ajoutdata(){
        if(isset($_POST['ajouter'])){
            $ext = explode(".",$_FILES['image']['name'])[1];
            $file_name = sha1($_FILES['image']['name']. rand(0,100000000)).".".$ext;
            move_uploaded_file($_FILES['image']['tmp_name'],"image/".$file_name);
            $query = $this->bd->prepare("INSERT INTO `produit`(`image`,`nom`, `contenu`, `user_id`) VALUES (:img,:nom,:con,:id)");
            $query->execute(array(
                ":nom"=>$_POST['produit'],
                ":con"=>$_POST['desc'],
                ":id"=>$_SESSION['id'],
                ":img"=> $file_name
            ));
        }
    }
    public function affichtable(){
        $query =$this->bd->query("SELECT * FROM `produit` WHERE 1");
        echo "<table>";
        include("code_html/connection/titre_table_article.php");
        foreach($query as $row){
            include("code_html/connection/article.php");
        }
        echo "</table>";
    }
    public function affichform(){
        include("code_html/connection/form/ajouter.php");
    }
};