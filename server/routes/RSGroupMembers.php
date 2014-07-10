<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Group Members
*	Supported routes: 
*	-- POST 
*	-- GET many of one group
*	
*	@author René Grossmann
*/
class RSGroupMembers {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSGroupMembers
	 */
	protected $CSGroupMember;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSGroupMember = CSGroupMember::getInstance();
        
        //POST group member route
		$this->api->post('/groupmembers', array($this, 'createGroupMember'));

		//GET all members of one group
		$this->api->get('/groups/:groupId/members', array($this, 'getMembersOfGroup'));
    }

    /**
     * POST a new Group Member
     * @return {JSON} Group Member created - "Success: false" and error 400 if not created
     */
    public function createGroupMember() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);
		
		$results = $this->CSGroupMember->create($body);

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
     * GET all the Group Members of the group corresponding to the id
     * @param  {int}  groupId Id of the group
     * @return {JSON} Group Members of the group corresponding if group found - "Success: false" and error 404 if not
     */
	public function getMembersOfGroup($groupId) {

		$results = $this->CSGroupMember->readByGroup($groupId);

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