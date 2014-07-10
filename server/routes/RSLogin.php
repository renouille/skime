<?php

/**
*	Service REST to log in skiMe
*	Supported routes:
*	-- POST (login)
*	-- DELETE (logout)
*	
*	@author René Grossmann
*/
class RSLogin {

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
	 * CRUD service object
	 * @var CSAuth
	 */
	protected $CSAuth;


	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSUser = CSUser::getInstance();
        $this->CSAuth = CSAuth::getInstance();

        //Login route
		$this->api->post('/login', array($this, 'login')); 

		//Logout rout
		$this->api->delete('/login', array($this, 'logout'));
    }

    /**
     * Verify if the email matches the password to log in
     * @return {JSON} User informations if logged in - "Success: false" and error 401 if not
     */
    public function login() {

		$req = $this->api->request();

		$element = array(
			'email' => 	$req->headers('SM-usermail'),
			'password' => $req->headers('SM-password')
		);

		$results = $this->CSUser->login($element);
		$response = $this->api->response();
		$response['Content-Type'] = 'application/json';

		if($results['success'] == 'true') {

			$user = $results['user'];

			$authToken = hash('sha256', $user['id'].'|'.time().'|'.uniqid());
			
			$element = array('authToken' => $authToken, 'user_id' => $user['id']);

			$tokenResults = $this->CSAuth->create($element);

			if($tokenResults['success'] == 'true') {
				$response['SM-authToken'] = $authToken;
				$response->status(200);
			} else {
				$results = array('success' => 'false');
				$response->status(401);
			}
		}

		$response->body(json_encode($results));
	}

	/**
     * Verify the authentication token is valid and matches an user, delete the token if true
     * @return {JSON} "Success: true" if token deleted - "Success: false" and error 400 if not
     */
    public function logout() {

		$req = $RSLogin->api->request();

		$element = array(
			'userId' => $req->headers('SM-apiKey'),
			'authToken' => $req->headers('SM-authToken') 
		);

		$results = $RSLogin->CSAuth->delete($element);
		$response = $RSLogin->api->response();
		$response['Content-Type'] = 'application/json';

		if($results['success'] == 'true') {
			$response->status(200);
		} else {
			$response->status(400);
		}

		$response->body(json_encode($results));
	}
}
?>