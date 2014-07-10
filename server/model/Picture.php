<?php

/**
 * Class simulating a Picture
 * 
 * @author René Grossmann
 */
class Picture extends \Slim\ValidModel {
	public static $_table = 'Picture';

	public function __construct()
    {
        // Validation model
        $this->addValidation('title', 'isString maxLength|32', 'Title must be maximum 32 characters.');
        $this->addValidation('description', 'isString maxLength|140', 'Description must be maximum 140 characters.');

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
