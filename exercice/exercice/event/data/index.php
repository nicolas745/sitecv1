<?php
class data{
    private $row;
    public function __construct($id,$bd)
    {
        $query=$bd->prepare("SELECT * FROM `produit` WHERE id=:id");
        $query->execute(array(
            ":id"=> $id
        ));
        $this->row = $query->fetch();
    }
    public function get_image(){
        return $this->row['image'];
    }
}