<br><a href="?">retour<a>
<form method='post' enctype="multipart/form-data">
    <p>image :</p>
    <img src="image/<?=$data['image']?>">
    <input type='file'name='image' value='image/<?=$data['image']?>'>
    <p>nom :</p>
    <input name='nom' value='<?=$data['nom']?>'>
    <p>description :</p>
    <textarea name='desc'><?=$data['contenu']?></textarea>
    <p>quantité</p>
    <input type="number" name='nombre' min="0" pattern="[0-9]*" required value='<?=$data['nombre']?>'>
    <input type='submit' value='modifer' name='submit'>
</form>