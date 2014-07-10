<?php

/**
 * Class simulating a Resort
 * 
 * @author René Grossmann
 */
class Resort extends \Slim\ValidModel {
	public static $_table = 'Resort';

	public function __construct()
    {
        // Validation model
        $this->addValidation('name', 'required', 'A name is required.');
        $this->addValidation('name', 'onlyLetters', 'A name can only be composed of letters.');
        $this->addValidation('country_code', 'required', 'A country code is required');
        $this->addValidation('boundaries', 'required', 'Boundaries of the resort are required');
    }

    /**
     * Get the associated Country
     * @return {Country} The associated Country
     */
    public function getCountry() {
        return $this->belongs_to('Country', 'country_id');
    }

    /**
     * Get all the associated Pictures
     * @return {array} The associated Pictures
     */
    public function getPictures() {
        return $this->has_many('Picture', 'resort_id');
    }

    /**
     * Get the associated Profile Picture
     * @return {ProfilePicture} The associated Profile Picture
     */
    public function getProfilePicture() {
        return $this->has_one('ProfilePicture', 'resort_id');
    }

    /**
     * Get all the associated Webcams
     * @return {array} The associated Webcams
     */
    public function getWebcams() {
        return $this->has_many('Webcam', 'resort_id');
    }
}

?>
