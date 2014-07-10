<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Pictures
*	Supported routes:
*	-- GET many of one user
*	-- GET many of one resort
*	-- POST
*	
*	@author René Grossmann
*/
class RSPictures {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSPicture
	 */
	protected $CSPicture;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSPicture = CSPicture::getInstance();

		//GET all pictures of user route
		$this->api->get('/users/:userId/pictures', array($this, 'getAllPicturesOfUser'));

		//GET all pictures of resort route
		$this->api->get('/resorts/:resortId/pictures', array($this, 'getAllPicturesOfResort'));

		//POST picture route
		$this->api->post('/pictures', array($this, 'createPicture'));
    }

    /**
     * GET all the Pictures of the User corresponding to the id
     * @param  {int}  userId Id of the User
     * @return {JSON} List of Pictures of the corresponding User - "Success: false" and error 404 if not found
     */
    public function getAllPicturesOfUser($userId) {
		$results = $this->CSPicture->readByUser($userId);

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
     * GET all the Pictures of the corresponding Resort
     * @param  {int}  resortId Id of the Resort
     * @return {JSON} List of Pictures of the corresponding Resort - "Success: false" and error 404 if not found
     */
	public function getAllPicturesOfResort($resortId) {
		$results = $this->CSPicture->readByResort($resortId);

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
     * POST a new picture
     * @return {JSON} Picture created - "Success: false" and error 400 if not created
     */
	public function createPicture() {
			
		$req = $this->api->request();
		$body = json_decode($req->getBody(), true);
		
		$results = $this->CSUser->create($body);

		$if($results['success']) {
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