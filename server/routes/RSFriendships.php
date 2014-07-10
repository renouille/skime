<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Friendships
*	Supported routes: 
*	-- POST
*	-- DELETE
*	
*	@author René Grossmann
*/
class RSFriendships {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSFriendship
	 */
	protected $CSFriendship;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSFriendship = CSFriendship::getInstance();

		//POST friendship route
		$this->api->post('/friendships', array($this, 'createFriendship'));

		//DELETE friendship route
		$this->api->delete('/friendships/:fromUserId/:toUserId', array($this, 'deleteFriendship'));
    }

    /**
     * POST a new friendship
     * @return {JSON} Friendship created - "Success: false" and error 400 if not created
     */
    public function createFriendship() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);
		
		$results = $this->CSFriendship->create($body);

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
     * DELETE the friendship corresponding to the two user ids
     * @return {JSON} "Success: true" if deleted - "Success: false" and error 400 if not
     */
	public function deleteFriendship($fromUserId, $toUserId) {
			
		$req = $this->api->request();
		$body = array("fromUserId" => $fromUserId, "toUserId" => $toUserId);
		
		$results = $this->CSFriendship->delete($body);

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