<?php
class Sql
{
    private int $id;
    private PDO $bdd;
    public function __construct()
    {
        try {
            $this->bdd = new PDO("mysql:host=localhost;dbname=le jeu de combat", "root", "");
        } catch (PDOException $e) {
            var_dump($e);
        }
    }
    public function create($nom, $degats)
    {
        $req = $this->bdd->prepare('INSERT INTO `personnage`(`nom`, `degats`) VALUES (?,?)');
        $req->bindValue(1, $nom, PDO::PARAM_STR);
        $req->bindValue(2, $degats, PDO::PARAM_INT);
        $req->execute();
        $this->id = $this->bdd->lastInsertId();
    }
    public function getJoueurs()
    {
        return $this->bdd->query('SELECT * FROM `personnage` WHERE 1');;
    }
    public function getId()
    {
        return $this->id;
    }
    public function setMort()
    {
        $req = $this->bdd->prepare('DELETE FROM `personnage` WHERE id=?');
        $req->bindValue(1, $this->id, PDO::PARAM_INT);
        $req->execute();
    }
    public function setDegats(int $degats)
    {
        $req = $this->bdd->prepare('UPDATE `personnage` SET `degats`=? WHERE id=?');
        $req->bindValue(1, $degats, PDO::PARAM_INT);
        $req->bindValue(2, $this->id, PDO::PARAM_INT);
        $req->execute();
    }
    public function setId(int $id)
    {
        $this->id = $id;
    }
}
