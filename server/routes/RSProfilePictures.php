<?php

/**
*	Service REST to manage GET, POST, PUT & DELETE routes on Profile Pictures
*	Supported routes:
*	-- GET one of one user
*	
*	@author René Grossmann
*/
class RSProfilePictures {

	/**
     * Slim object
     * @var api
     */
	protected $api;

	/**
	 * CRUD service object
	 * @var CSProfilePicture
	 */
	protected $CSProfilePicture;

	/**
     * Constructor
     * Set up the routes and the CRUD Service associated with the object
     */
    public function __construct() {
        $this->api = \Slim\Slim::getInstance();

        $this->CSProfilePicture = CSProfilePicture::getInstance();

		//GET profile picture of user
		$this->api->get('/users/:userId/profilepicture', array($this, 'getProfilePictureOfUser'));
    }

    /**
     * GET the Profile Picture of the corresponding User
     * @param  {int}  userId Id of the User
     * @return {JSON} Profile Picture of the corresponding User - "Success: false" and error 404 if not found
     */
    public function getProfilePictureOfUser($userId) {
		$results = $this->CSProfilePicture->readByUser($userId);

		$response = $this->api->response();
		$response['Content-Type'] = 'application/json';

		if($results['success']) {
			$response->status(200);
		} else {
			$response->status(404);
		}
		
		$response->body(json_encode($results));
	}
}
?>