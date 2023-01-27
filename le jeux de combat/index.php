<?php
function chargerClasse($classe)
{
    require_once 'class/' . $classe . '.php';
}
spl_autoload_register('chargerClasse');
$jeux = new Jeux();
$jeux->join("nico");
if (isset($_POST['attack'])) {
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <main>
        <h1>Jeux de combats</h1>
        <section>
            <h2>Info personage</h2>
        </section>
        <section>
            <h2>action</h2>
            <form method="post">
                <select>
                    <?php
                    foreach ($jeux->getJoueurs() as $joueur) {
                        if ($joueur instanceof Personnage) {
                            if ($joueur->getNom() != $jeux->getMe()->getNom()) {
                                echo "<option value=" . $joueur->getId() . ">";
                                echo $joueur->getNom();
                                echo "</option>";
                            }
                        }
                    }
                    ?>
                </select>
                <input type="submit" value="attaqué" name="attack">
            </form>
        </section>
        <section>
            <h2>plateau</h2>
            <?php
            foreach ($jeux->getJoueurs() as $joueur) {
                if ($joueur instanceof Personnage) {
                    echo "<article>";
                    echo "<p>id :" . $joueur->getId() . "</p>";
                    echo "<p>pseudo : " . $joueur->getNom() . "</p>";
                    echo "<p>vie : " . $joueur->getdegats() . "</p>";
                    echo "</article>";
                }
            }
            ?>
        </section>
    </main>
    <?php
    ?>
</body>

</html>