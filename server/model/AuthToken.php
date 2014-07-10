<?php

/**
 * Class simulating an Authentication Token
 * 
 * @author René Grossmann
 */
class AuthToken extends \Slim\ValidModel {
	public static $_table = 'AuthToken';
    public static $_id_column = 'token';

	public function __construct()
    {
        // Validation model
        $this->addValidation('token', 'required', 'A token is required.');

        $this->addValidation('User_id', 'required', 'A user id is required.');

        $this->addValidation('timestamp', 'required', 'A timestamp is required.');
    }

    /**
     * Get the associated User
     * @return {User} The associated User
     */
    public function getUser() {
        return $this->has_one('User');
    }
}

?>
