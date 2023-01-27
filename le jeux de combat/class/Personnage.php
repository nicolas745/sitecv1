<?php

class Personnage
{
    private Sql $BD;
    private $id = 0;
    private $nom;
    private $degats = 0;
    //donnees contient nom,degats, nom dois pas etre vide;
    public function __construct(array $donnees)
    {
        $this->BD = new Sql();
        $this->hydrate($donnees);
    }
    public function hydrate(array $donnees)
    {
        foreach ($donnees as $key => $value) {
            $method = 'set' . ucfirst($key);
            print_r($method);
            if (method_exists($this, $method)) {
                $this->$method($value);
            }
        }
    }
    public function create()
    {
        $this->getBD()->create($this->nom, $this->degats);
        $this->id = $this->getBD()->getId();
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function getId()
    {
        return $this->id;
    }
    public function getdegats()
    {
        return $this->degats;
    }
    private function setId(int $id)
    {
        if (0 <= $id) {
            $this->getBD()->setId($id);
            $this->$id = $id;
        }
    }
    private function setNom($nom)
    {
        if (is_string($nom)) {
            $this->nom = $nom;
        }
    }
    //$degats nombre de degats
    private function setDegats(int $degats)
    {
        if ($degats >= 0 && $degats <= 100) {
            $this->degats = $degats;
        }
    }
    public function isMort()
    {
        if (!$this->degats <= 100) {
            $this->getBD()->setMort();
            return true;
        } else return false;
    }

    public function frapper(Personnage $perso)
    {
        if (!$this->isNom($perso->getNom())) return false;
        $perso->recevoirDegats(5);
        return true;
    }
    //degats est le nombre de degats
    public function recevoirDegats(int $degats)
    {
        $this->degats += $degats;
        $this->getBD()->setDegats($this->degats);
        return $this->isMort();
    }

    public function isNom($nom)
    {
        return $this->nom == $nom;
    }

    private function getBD()
    {
        return $this->BD;
    }
}
