<?php
	/**
	 * Configuration file to set up the url of the database
	 *
	 * @author René Grossmann
	 */
	
	//Database host
	//OGO: 127.0.0.1
	//WAMP: 192.168.0.11
	define('SKIME_DB', '193.134.217.88');
	define('OSM_DB', '193.134.217.88');

	//App GUID
	define('GUID', '55ab6869-fe05-434f-a6c8-b8087769c81f');

	//Time zone
	date_default_timezone_set("Europe/Paris");

	//Database connection
	//OGO: webtb1 - 6w550nin
	//WAMP: skime - root
	ORM::configure('pgsql:host='.SKIME_DB.';dbname=skime');
	ORM::configure('port', 5432);
	ORM::configure('username', 'webtb1');
	ORM::configure('password', '6w550nin');

	ORM::configure('pgsql:host='.OSM_DB.';dbname=skime', null, 'osmdata');
	ORM::configure('port', 5432, 'osmdata');
	ORM::configure('username', 'webtb1', 'osmdata');
	ORM::configure('password', '6w550nin', 'osmdata');
?>