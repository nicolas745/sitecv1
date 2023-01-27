<?php
//define('WP_ALLOW_REPAIR', true);
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */
define('FS_METHOD', 'direct');
// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
//define( 'DB_NAME', 'DB1275_wordpress' );
define('DB_NAME', 'wordpress');
/** Utilisateur de la base de données MySQL. */
//define('DB_USER', 'AA5548_nico-blan');
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
//define( 'DB_PASSWORD', '5A7EDB19C097C7F' );
define('DB_PASSWORD', '');
/** Adresse de l’hébergement MySQL. */
//define('DB_HOST', 'mysql-7.nextwab.com');
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',#*DPfyf{E_Qa/Tp!v3-fq$[MZ8W-Cb2xdaHDX53rTAiZwO3H3$Qa)sN`/cwQ9nb');
define('SECURE_AUTH_KEY',  '!Xo@,bxrR3e&?nK(N<^FW&)3-tcprez-H@K6w]FHFYUE>[.9pme[|lw!9db|2K4T');
define('LOGGED_IN_KEY',    'x9H6iCx{$B3lN<%^*teNsM3U3FN?]qwz2@#56+ N]Sp63${(L^#/c/g|4^H/<{>N');
define('NONCE_KEY',        'EqL]XLg}>YUPPjZ8edUqSc2TW%q)K rM|LY+S_IAOlOx(|SJ&@SXav$Y65Vu&(Hr');
define('AUTH_SALT',        'E3&)qgVf`OCzRa/}p.$UN2@P9`2rv0HX$h+>R3L?{)&q3}()-+FG+6C9ydW9W3Yj');
define('SECURE_AUTH_SALT', 'O<kA1J.{+$_e3*Q.?K^h$5,<Z%wTjU;!:~~&T(-F: m9+aCZg5=!yh/z~TbsZKEm');
define('LOGGED_IN_SALT',   '4$^J6Q! H;x)V8LVtpL#h#7^.r,wkT%MrXL77Y@dG@+e(d,px+`v+M+Q9[%zPMyn');
define('NONCE_SALT',       'zQ3&f}]]]SAr;Ku6Dm>y;|&u=J0`X;8dA<5P%z(KY`9Dw)~4!Sf&#I|T&uLl30}&');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if (!defined('ABSPATH'))
  define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
