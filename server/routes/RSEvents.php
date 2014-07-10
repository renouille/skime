<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Events
*	Supported routes:
*	-- GET one
*	-- POST
*	
*	@author René Grossmann
*/
class RSEvents {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSEven
	 */
	protected $CSEvent;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSEvent = CSEvent::getInstance();

		//GET one event route		
		$this->api->get('/events/:id', array($this, 'getEvent'));

		//POST a new event route
		$this->api->post('/events', array($this, 'createEvent'));
    }

	/**
     * GET the Event corresponding to the id
     * @return {JSON} Event corresponding to the id - "Success: false" and error 404 if not found
     */
	public function getEvent($id) {

		$results = $this->CSEvent->read($id);

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
     * POST a new Event
     * @return {JSON} Event created - Success:false and error 400 if not created
     */
	public function createEvent() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);

		$results = $this->CSEvent->create($body);

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