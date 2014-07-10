<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Lifts
*    Supported routes: 
*    -- GET many
*    
*	@author René Grossmann
*/
class RSLifts {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSLift
	 */
	protected $CSLift;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSLift = CSLift::getInstance();
        
        //GET all lifts route
		$this->api->get('/lifts', array($this, 'getAllLifts'));
    }

    /**
     * GET all the lifts
     * @return {JSON} List of all lifts - "Success: false" and error 404 if not found
     */
    public function getAllLifts() {
		$results = $this->CSLift->readAll();

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