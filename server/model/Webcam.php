<?php

/**
 * Class simulating a Webcam
 * 
 * @author René Grossmann
 */
class Webcam extends \Slim\ValidModel {
	public static $_table = 'Webcam';

	public function __construct()
    {
        // Validation model
        $this->addValidation('title', 'isString maxLength|32', 'Title must be maximum 32 characters.');

        $this->addValidation('url', 'required isString', 'A valid url is required');
        $this->addValidation('psotion', 'required', 'A position url is required');

        $this->addValidation('resort_id', 'isInteger', 'Resort id must be valid');
    }

    /**
     * Get the associated Resort
     * @return {Resort} The associated Resort
     */
    public function getResort() {
        return $this->belongs_to('Resort');
    }
}

?>