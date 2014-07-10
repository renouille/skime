<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Users
*	Supported routes:
*	-- GET many
*	-- GET one
*	-- GET friends of one user
*	-- POST
*	
*	@author René Grossmann
*/
class RSUsers {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSUser
	 */
	protected $CSUser;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
    	
        $this->api = \Slim\Slim::getInstance();

        $this->CSUser = CSUser::getInstance();
        
        //GET all users route
		$this->api->get('/users', array($this, 'getAllUsers'));

		//GET one user route
		$this->api->get('/users/:id', array($this, 'getUser'));

		//GET all friends of one user route
		$this->api->get('/users/:id/friends', array($this, 'getFriendsOfUser'));

		//POST user route
		$this->api->post('/users', array($this, 'createUser'));
    }

    /**
     * GET all the Users
     * @return {JSON} List of Users - "Success: false" and error 404 if not found
     */
    public function getAllUsers() {
		$results = $this->CSUser->readAll();

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
     * GET the User corresponding to the id
     * @param  {int}  id Id of the User
     * @return {JSON} User corresponding to the id - "Success: false" and error 404 if not found
	 */
	public function getUser($id) {

		$results = $this->CSUser->read($id);

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
     * GET all the friends of the User corresponding to the id
     * @param  {int}  id Id of the User
     * @return {JSON} List of friends of the corresponding User - "Success: false" and error 404 if not found
     */
	public function getFriendsOfUser($id) {
		$results = $this->CSUser->readFriends($id);

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
     * POST a new User
     * @return {JSON} User created - "Success: false" and error 400 if not
     */
	public function createUser() {

		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);
		
		$results = $this->CSUser->create($body);

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