<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Countries
*   Supported routes:
*   -- GET many
*   
*	@author René Grossmann
*/
class RSCountries {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSEven
	 */
	protected $CSCountry;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSCountry = CSCountry::getInstance();
        
   		//Get all countries route
		$this->api->get('/countries', array($this, 'getAllCountries'));
    }

    /**
     * GET all the Countries
     * @return {JSON} List of all countries - "Success: false" and error 404 if not found
     */
    public function getAllCountries() {

		$results = $this->CSCountry->readAll();

		$response = $this->api->response();
		$response['Content-Type'] = 'application/json';

        if($results['success']) {
            $response->status(200);
        } else {
            $response->status(404);
        }

		$response->body(json_encode($results));
	}
}
?>