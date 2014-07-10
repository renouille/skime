<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Webcams
*	Supported routes:
*	-- GET many
*	-- GET many of one Resort
*	
*	@author René Grossmann
*/
class RSWebcams {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSWebcam
	 */
	protected $CSWebcam;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSWebcam = CSWebcam::getInstance();

		//GET all webcams of resorts route
		$this->api->get('/resorts/:resortId/webcams', array($this, 'getAllWebcamsOfResort'));

		//GET all webcams
		$this->api->get('/webcams', array($this, 'getAllWebcams'));
    }

    /**
     * GET all the Webcams of Resort corresponding to the id
     * @param  {int} resortId Id of the Resort
     * @return {JSON} List of Webcams of the corresponding Resort - "Success: false" and error 404 if not found
     */
    public function getAllWebcamsOfResort($resortId) {

		$results = $this->CSWebcam->readByResort($resortId);

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
     * GET all the Webcams
     * @return {JSON} List of Webcams - "Success: false" and error 404 if not found
     */
	public function getAllWebcams() {
		$results = $this->CSWebcam->readAll();

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