<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Meeting Points
*	Supported routes:
*	-- POST
*	-- GET one
*	-- GET many of one user
*	-- PUT one of one user
*	
*	@author René Grossmann
*/
class RSMeetingPoints {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSMeetingPoint
	 */
	protected $CSMeetingPoint;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSMeetingPoint = CSMeetingPoint::getInstance();
        
		//POST meeting point route
		$this->api->post('/meetingpoints', array($this, 'createMeetingPoint'));

		//GET one meeting point route
		$this->api->get('/meetingpoints/:id', array($this, 'getMeetingPoint'));

		//GET all meeting point of user route
		$this->api->get('/users/:userId/meetingpoints', array($this, 'getAllMeetingPointsOfUser'));

		//PUT meeting point of user route
		$this->api->put('/users/:userId/meetingpoints/:id', array($this, 'updateMeetingPoint'));
    }

    /**
     * POST a new Meeting Point
     * @return {JSON} Meeting Point created - "Success: false" and error 400 if not created
     */
    public function createMeetingPoint() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);

		$results = $this->CSMeetingPoint->create($body);

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
	 * GET the Meeting Point corresponding to the id
	 * @param  {int}  id Id of the Meeting Point
	 * @return {JSON} Meeting Point corresponding to the id - "Success: false" and error 404 if not found
	 */
	public function getMeetingPoint($id) {
		$results = $this->CSMeetingPoint->read($id);

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
     * GET all the Meeting Points of the user corresponding to the id
     * @param  {int}  userId Id of the user
     * @return {JSON} List of Meeting Points of the corresponding user - "Success: false" and error 404 if not found
     */
	public function getAllMeetingPointsOfUser($userId) {
		$results = $this->CSMeetingPoint->readByUser($userId);

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
     * PUT the Meeting Point corresponding to the id
     * @param  {int}  userId Id of the User
     * @param  {int}  int Id of the Meeting Point to update
     * @return {JSON} Meeting Point modified - "Success: false" and error 400 if not modified
     */
	public function updateMeetingPoint($userId, $id) {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);

		$results = $this->CSMeetingPoint->update($id, $body);

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