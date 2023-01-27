<?php
class Jeux
{
    private Personnage $me;
    public static array $joueurs = [];
    public function __construct()
    {
        $sql = new sql();
        $joueurs = $sql->getJoueurs();
        foreach ($joueurs as $joueur) {
            var_dump($joueur);
            array_push(self::$joueurs, new Personnage($joueur));
        }
    }
    public function join($pseudo)
    {
        $this->me = new Personnage(array(
            "Nom" => $pseudo
        ));
        $this->me->create();
    }
    public function getJoueurs()
    {
        return self::$joueurs;
    }
    public function getMe()
    {
        return $this->me;
    }
}
