<?php

/**
 * Class simulating a Friendship
 * 
 * @author René Grossmann
 */
class Friendship extends \Slim\ValidModel {
	public static $_table = 'Friendship';
	public static $_id_column = 'fromuser_id';

	public function __construct() {
		// Validation model
	    $this->addValidation('status', 'required isFriendshipStatus', 'A valid friendship status is required');
	}

}

?>