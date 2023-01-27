<br><a href="?">retour<a>
<form method='post'>
<img src="image/<?=$data['image']?>">
<input type='file'name='image' value='image/<?=$data['image']?>'>
<input name='nom' value='<?=$data['nom']?>'>
<textarea name='desc'><?=$data['contenu']?></textarea>
<input type='submit' value='modifer' name='submit'>