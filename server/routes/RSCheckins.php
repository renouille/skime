<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Checkins
*	Supported routes:
*	-- POST
*	-- GET one
*	-- GET many of one user
*	
*	@author René Grossmann
*/
class RSCheckins {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSCheckin
	 */
	protected $CSCheckin;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSCheckin = CSCheckin::getInstance();
        
		//POST checkin route
		$this->api->post('/checkins', array($this, 'createCheckin'));

		//GET all checkins from user route
		$this->api->get('/users/:userId/checkins', array($this, 'getCheckinsOfUser'));

		//GET one checkin route
		$this->api->get('/checkins/:id', array($this, 'getCheckin'));
    }

    /**
     * POST a new Checkin
     * @return {JSON} Checkin created - "Success: false" and error 400 if not created
     */
    public function createCheckin() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);

		$results = $this->CSCheckin->create($body);

		if($results['success']) {
			$response = $this->api->response();
			$response['Content-Type'] = 'application/json';		
			$response->status(200);
			$response->body(json_encode($results));
		} else {
			$this->badRequest();
		}				
		
    }

    /**
     * GET all the Checkins of the user corresponding to the id
     * @param  {int}  userId Id of the user
     * @return {JSON} List of checkins of the corresponding user - "Success: false" and error 404 if not found
     */
    public function getCheckinsOfUser($userId) {

		$results = $this->CSCheckin->readByUser($userId);

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
     * GET the Checkin corresponding to the id
     * @param {int}   id Id of the Checkin
     * @return {JSON} Checkin corresponding to the id - "Success: false" and error 404 if not found
     */
	public function getCheckin($id) {
		
		$results = $this->CSCheckin->read($id);

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
	 * Create a new response with a 400 Bad Request error
	 */
    private function badRequest() {
		$response = $this->api->response();
		$response['Content-Type'] = 'application/json';		
		$response->status(400);
		$results = array("success" => false);
		$response->body(json_encode($results));
	}
}
?>