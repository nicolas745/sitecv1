<?php
class connect{
    private $bd;
    public function __construct($bd){
        $this->bd = $bd;
    }
    public function modifdata(){
        if(isset($_POST['submit'])){
            $imageData = $_POST['image'];
            $header = substr($imageData, 0, strpos($imageData, ','));
            $data = base64_decode(substr($imageData, strpos($imageData, ',') + 1));
            $headerInfo = explode(';', $header);
            $ext = explode('/', $headerInfo[0])[1];
            $fileName = uniqid() . '.' . $ext;
            file_put_contents($fileName, $data);
            $query=$this->bd->prepare("UPDATE `produit` SET `image`=:img `nom`=:nom,`contenu`=:con WHERE `id`=:id");
            $query->execute(array(
                ":img" =>$fileName,
                ":nom"=>$_POST['nom'],
                ":con"=>$_POST['desc'],
                ":id"=>$_GET['article']
            ));
        }
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
    public function supridata(){
        if(isset($_POST['supr'])){     
            $query = $this->bd->prepare("DELETE FROM `produit` WHERE `id`=?");
            $query->execute([$_POST['id']]);
        }
    }
    public function ajoutdata(){
        if(isset($_POST['ajouter'])){
            var_dump($_FILES);
            exit(1);
            $query = $this->bd->prepare("INSERT INTO `produit`(`image`,`nom`, `contenu`, `user_id`) VALUES (:img,:nom,:con,:id)");
            $query->execute(array(
                ":nom"=>$_POST['produit'],
                ":con"=>$_POST['desc'],
                ":id"=>$_SESSION['id'],
                ":img"=>""
            ));
        }
    }
    public function affichtable(){
        $query =$this->bd->query("SELECT * FROM `produit` WHERE 1");
        echo "<table>";
        echo "<tr><th>nom</th><th>description</th><th>image</th></tr>";
        foreach($query as $row){
            include("code_html/connection/article.php");
        }
        echo "</table>";
    }
    public function affichform(){
        include("code_html/connection/form/ajouter.php");
    }
}