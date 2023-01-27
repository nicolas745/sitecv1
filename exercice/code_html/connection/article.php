<form method="post">
    <tr class="data" onclick="window.location.href='?article=<?=$row['id']?>'">
        <td>
            <?=$row['nom']?>
        </td>
        <td>
            <?=$row['contenu']?>
        </td>
        <td> 
            <img src="image/<?=$row['image']?>">
        </td>
        <td>
            <input name='id' value='<?=$row['id']?>' hidden>
            <input type=submit name='supr' value='suprimer'>
        </td>
    </tr>
</form>