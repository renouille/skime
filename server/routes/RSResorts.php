<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Resorts
*	Supported routes:
*	-- GET
*	-- GET many
*	
*	@author René Grossmann
*/
class RSResorts {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSResort
	 */
	protected $CSResort;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSResort = CSResort::getInstance();
        
		//GET one resort route
		$this->api->get('/resorts/:id', array($this, 'getResort'));

		//GET all resorts
		$this->api->get('/resorts', array($this, 'getAllResorts'));
    }

    /**
     * GET the Resort corresponding to the id
     * @param  {int}  id Id of the Resort
     * @return {JSON} Resort corresponding to the id - "Success: false" and error 404 if not found
	 */
	public function getResort($id) {
		$results = $this->CSResort->read($id);

		$response = $this->api->response();
		$response['Content-Type'] = 'application/json';

		if($results['success']) {
			$response->status(200);
		} else {
			$response->status(404);
		}
		
		$response->body(json_encode($results));
	}

	/**
     * GET all the Resorts
     * @return {JSON} List of all Resorts - "Success: false" and error 404 if not found
     */
	public function getAllResorts() {
		$results = $this->CSResort->readAll();

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