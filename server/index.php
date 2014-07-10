<?php
	//Framework requires
	require 'vendor/autoload.php';
	require 'AutoLoader.php';

	//config
	require 'config/config.php';
	
	//REST API
	$api = new \Slim\Slim(array(
    	'debug' => true
	));

	//Authentification middleware
	$api->add(new Auth());

	//Main route
	$api->get('/', function() {
		echo 'skiMe REST API';
	});

	//Routes
	$RSPistes = new RSPistes();
	$RSLifts = new RSLifts();
	$RSLogin = new RSLogin();
	$RSUsers = new RSUsers();
	$RSEvents = new RSEvents();
	$RSCheckins = new RSCheckins();
	$RSMeetingPoints = new RSMeetingPoints();
	$RSFriendships = new RSFriendships();
	$RSUserNotifications = new RSUserNotifications();
	$RSCountries = new RSCountries();
	$RSGroups = new RSGroups();
	$RSGroupMembers = new RSGroupMembers();
	$RSResorts = new RSResorts();

	$api->run();
?>