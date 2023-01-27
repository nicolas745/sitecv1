<?php
session_start();
include("connect.php");
include("notconnect.php");
class event{
    private $bd;
    public function connect(){
        return new connect($this->bd);
    }
    public function notconect(){
        return new notconect($this->bd);
    }
    public function isconnect(){
        return isset($_SESSION['user']);
    }
    public function mysql($host,$table,$user,$password){
        $this->bd = new PDO("mysql:host=$host;dbname=$table","$user","$password");
    }
}