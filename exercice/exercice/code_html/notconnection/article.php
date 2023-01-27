<?php
//$row est stoker les donner d'un seul produit
?>
<tr>
    <td> <?=$row['nom']?> </td>
    <td> <?=$row['contenu']?> </td>
    <td> <img src="image/<?=$row['image']?>"></td>
    <td> <?=$row['nombre']?></td>
    <td>
        <form action="post">
            <label>quantité : </label>
            <input value="<?=$row['id']?>" hidden>
            <input type="number" name="nombre" min="0" max="<?=$row['nombre']?>" pattern="[0-9]*" required=""><br>
            <input type="submit" name="value" value="ajouter au pagnier">
        </form>
    </td>
</tr> 