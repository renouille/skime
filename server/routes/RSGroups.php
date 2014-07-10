<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Groups
*	Supported routes: 
*	-- POST
*	-- GET many
*	
*	@author René Grossmann
*/
class RSGroups {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSGroup
	 */
	protected $CSGroup;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSGroup = CSGroup::getInstance();
        
		//POST groupe route
		$this->api->post('/groups', array($this, 'createGroup'));

		//GET groups of user route
		$this->api->get('/users/:userId/groups', array($this, 'getGroupsOfUser'));
    }

    /**
     * POST a new Group
     * @return {JSON} Group created - "Success: false" and error 400 if not created
     */
    public function createGroup() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);

		$results = $this->CSGroup->create($body);

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
     * GET the Groups of the user corresponding to the id
     * @param  {int}  userId Id of the user
     * @return {JSON} Groups of the user corresponding - "Success: false" and error 404 if user or groups not found
     */
	public function getGroupsOfUser($userId) {
		$results = $this->CSGroup->readByUser($userId);

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