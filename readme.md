GUIDE D'INSTALLATION :
Pour installer l'application skiMe, la machine doit disposer de :
- PHP 5.4
- Apache 2.4
- PostgresSQL
- postGIS 2.0
- pgRouting

1. Copier l'entier du r�p�rtoire "skiMe" dans votre dossier www
2. Cr�er une base de donn�e postgreSQL appel�e "skime" avec les extension suivante :
 - HSTORE
 - postGIS 2.0
 - pgRouting
3. Importer le fichier skime_bkp.sql et skime_osmdata_bkp.sql � l'aide de la commande psql suivante :
 "\i chemin/du/fichier/sql"
4. Modifier le fichier "server/config/config.php" afin d'attribuer la bonne adresse IP, nom d'utilsiateur et mot de passe pour la connection � la base de donn�e
5. Modifier le fichier "app/app/config/Config.js" afin d'attribuer les bonnes adresses pour l'acc�s aux services webs et aux websockets
6. Modifier le fichier "app/app.json", sous l'attribut "js" modifier l'adresse d'acc�s � socket.io
7. Termin� !

Note: Le compte d'utilisateur et mot de passes pour la base de donn�e en local sont "skime" et "root", sur le serveur ogo.heig-vd.ch "webtb1" et "6w550nin"

GUIDE DE DEMARRAGE :
Afin que l'application d�marre en local il faut d�marrer les services suivant:
1. Apache
2. Serveur postgreSQL
3. Serveur web sockets

ARBORESCENCE DE L'APPLICATION :
app           dossier de l'application skiMe
  model       contient toutes les classes du Mod�le
  view        contient toutes les vues
  controller  contient tous les contr�leurs
  store       contient tous les stores
  config      contient le fichier de configuration
doc           contient la documentation du projet
ux            contient les extensions t�l�charg�e du market Sencha
lib           contient les librairies leaflets et ses plugins
resources     contient les rousources n�cessaires � l'application
  css         contient la css du slider, du menu "Path" et de la gallerie
  fonts       contient les fontes personnalis�e et les pictogrammes
  icons       contient les ic�nes de l'application
  loading     contient l'image de t�l�chargement
  sass        contient tous les fichiers SASS afin de g�n�rer la CSS
  startup     contient l'image de d�marrage de l'application (iPhone)

ARBORESCENCE DU SERVEUR :
config        contient le fichier de configuration du serveur
crud          contient toutes les classes des services CRUD
middleware    contient la classe d'authentification de SLIM
model         contient toutes les classes du Mod�le
routes        contient toutes les classes des routes de SLIM
utils         contient le convertisseur de champs hstore et phpass
websockets    contient le serveur websockets