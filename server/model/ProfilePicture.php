<?php

/**
 * Class simulating a Profile Picture
 * 
 * @author René Grossmann
 */
class ProfilePicture extends \Slim\ValidModel {
	public static $_table = 'ProfilePicture';

	public function __construct()
    {
        // Validation model
        $this->addValidation('url', 'required isString', 'A valid url is required');
        $this->addValidation('url_thumbnail', 'required isString', 'A valid thumbnail url is required');

        $this->addValidation('user_id', 'isInteger', 'User id must be valid');
        $this->addValidation('resort_id', 'isInteger', 'Resort id must be valid');
    }

    /**
     * Get the associated User
     * @return {User} The associated User
     */
    public function getUser() {
        return $this->belongs_to('User');
    }

    /**
     * Get the associated Resort
     * @return {Resort} The associated Resort
     */
    public function getResort() {
        return $this->belongs_to('User');
    }
}

?>
