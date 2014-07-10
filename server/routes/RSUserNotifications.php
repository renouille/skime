<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on User Notifications
*	Supported routes:
*	-- POST
*	
*	@author René Grossmann
*/
class RSUserNotifications {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSUserNotification
	 */
	protected $CSUserNotification;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSUserNotification = CSUserNotification::getInstance();
        

		//POST user notification route
		$this->api->post('/usernotifications', array($this, 'createUserNotification'));
    }

    /**
     * POST a new User Notification
     * @return {JSON} User Notification created - "Success: false" and error 400 if not
     */
    public function createUserNotification() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);
		
		$results = $this->CSUserNotification->create($body);

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