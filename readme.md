GUIDE D'INSTALLATION :
Pour installer l'application skiMe, la machine doit disposer de :
- PHP 5.4
- Apache 2.4
- PostgresSQL
- postGIS 2.0
- pgRouting

1. Copier l'entier du répértoire "skiMe" dans votre dossier www
2. Créer une base de donnée postgreSQL appelée "skime" avec les extension suivante :
 - HSTORE
 - postGIS 2.0
 - pgRouting
3. Importer le fichier skime_bkp.sql et skime_osmdata_bkp.sql à l'aide de la commande psql suivante :
 "\i chemin/du/fichier/sql"
4. Modifier le fichier "server/config/config.php" afin d'attribuer la bonne adresse IP, nom d'utilsiateur et mot de passe pour la connection à la base de donnée
5. Modifier le fichier "app/app/config/Config.js" afin d'attribuer les bonnes adresses pour l'accès aux services webs et aux websockets
6. Modifier le fichier "app/app.json", sous l'attribut "js" modifier l'adresse d'accès à socket.io
7. Terminé !

Note: Le compte d'utilisateur et mot de passes pour la base de donnée en local sont "skime" et "root", sur le serveur ogo.heig-vd.ch "webtb1" et "6w550nin"

GUIDE DE DEMARRAGE :
Afin que l'application démarre en local il faut démarrer les services suivant:
1. Apache
2. Serveur postgreSQL
3. Serveur web sockets

ARBORESCENCE DE L'APPLICATION :
app           dossier de l'application skiMe
  model       contient toutes les classes du Modèle
  view        contient toutes les vues
  controller  contient tous les contrôleurs
  store       contient tous les stores
  config      contient le fichier de configuration
doc           contient la documentation du projet
ux            contient les extensions téléchargée du market Sencha
lib           contient les librairies leaflets et ses plugins
resources     contient les rousources nécessaires à l'application
  css         contient la css du slider, du menu "Path" et de la gallerie
  fonts       contient les fontes personnalisée et les pictogrammes
  icons       contient les icônes de l'application
  loading     contient l'image de téléchargement
  sass        contient tous les fichiers SASS afin de générer la CSS
  startup     contient l'image de démarrage de l'application (iPhone)

ARBORESCENCE DU SERVEUR :
config        contient le fichier de configuration du serveur
crud          contient toutes les classes des services CRUD
middleware    contient la classe d'authentification de SLIM
model         contient toutes les classes du Modèle
routes        contient toutes les classes des routes de SLIM
utils         contient le convertisseur de champs hstore et phpass
websockets    contient le serveur websockets