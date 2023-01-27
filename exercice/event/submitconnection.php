<?php
session_start();
class connection{
    public $message = "";
    public function __construct(){
        if(isset($_SESSION['user'])){    
            header('Location:article.php');
        }
    }
    public function mysql($host,$table,$user,$password){
        $this->bd = new PDO("mysql:host=$host;dbname=$table","$user","$password");
    }
    public function actionco(){  //verifi l'action de se connecter
        if(isset($_POST['submit'])){ 
            try{
                $db = new PDO("mysql:host=localhost;dbname=Handigital","nicolas745","&Qwxsz18349276");
                $query =$db->prepare("SELECT * FROM `users` WHERE `username`=:user AND password=:pass");
                $query->execute(array(
                    ":user"=> $_POST['user'],
                    ":pass" => $_POST['password'],
        
                ));
                $user = $query->fetch();
                if($user){
                    $_SESSION['id'] = $user['id'];
                    $_SESSION['user'] = $_POST['user'];
                    header('Location:article.php');
                }else{
                    $this->message = "<strong>connection erreur</strong>";
                }
            }catch (PDOException $e){
                var_dump($e);
                exit(1);
            }
        }
    }
}