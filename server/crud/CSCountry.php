<?php
/**
 * CRUD service to Create, Read, Update and Delete Countries
 * Supported actions:
 * -- read all
 * 
 * @author René Grossmann
 */
class CSCountry {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSCountry} An instance of the CSCountry
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSCountry();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Read all the countries
     * @return {array} All the countries if success - "Success: false" if not
     */
	public function readAll() {

		$countries = Model::factory('Country')->find_array();

		if( $countries != null) {
			$results = array(
				'success' => true, 
				"countries" => $countries
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}
}
	
?>