<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Pistes
*   Supported routes:
*   -- GET many
*   
*	@author René Grossmann
*/
class RSPistes {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSPiste
	 */
	protected $CSPiste;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSPiste = CSPiste::getInstance();

        //GET all pistes route
		$this->api->get('/pistes', array($this, 'getAllPistes'));
    }

    /**
     * GET all the pistes
     * @return {JSON} List of all Pistes - "Success: false" and error 404 if not found
     */
    public function getAllPistes() {
		$results = $this->CSPiste->readAll();

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