<?php

/**
 * Class simulating a Country
 * 
 * @author René Grossmann
 */
class Country extends \Slim\ValidModel {
	public static $_table = 'Country';
    public static $_id_column = 'code';

	public function __construct()
    {
        // Validation model
        $this->addValidation('code', 'required isString', 'Code is required and must be a string');
        $this->addValidation('name_eng', 'required isInteger', 'A valid english name is required');
        $this->addValidation('name_fr', 'required isInteger', 'A valide french name is required.');
    }

    /**
     * Get all associated Users
     * @return {array} The associated users
     */
    public function getUsers() {
        return $this->has_many('User', 'country_id');
    }

    /**
     * Get all associated Resorts
     * @return {array} The associated resorts
     */
    public function getResorts() {
        return $this->has_many('Resort', 'country_id');
    }
}

?>
