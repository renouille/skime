<?php
/**
 * CRUD service to Create, Read, Update and Delete Profile Pictures
 * Supported actions:
 * -- create
 * -- read by user
 * -- read by resort
 * 
 * @author René Grossmann
 */
class CSProfilePicture {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSProfilePicture} An instance of CSProfilePicture
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSProfilePicture();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Create a new Profile Picture
     * @param  {array} element Data of the Profil Picture to create
     * @return {array} The Profil Picture created if success - "Success: false" if not
     */
	public function create($element) {

		$profilePicture = Model::factory('ProfilePicture')->create();
		$profilePicture->url = $element['url'];
		$profilePicture->url_thumbnail = (int)$element['url_thumbnail'];
		$profilePicture->user_id = (int)$element['user_id'];
		$profilePicture->resort_id = (int)$element['resort_id'];

		try {
			$profilePicture->save();
			
			$results = array(
				"success"=>true,
				"profilePicture"=> $profilePicture->as_array()
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
		}

		return $results;
	}

	/**
     * Read the Profile Picture of the corresponding User
     * @param  {int}   userId Id of the User
     * @return {array} The corresponding Profile Picture if success - "Success: false" if not
     */
	public function readByUser($userId) {

		$user = Model::factory('User')->find_one($userId);
		$profilePicture = $user->getProfilePicture()->find_array();

		if( $profilePicture != null) {

			$results = array(
				'success' => true, 
				'profilePicture' => $profilePicture
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
     * Read the Profile Picture of the corresponding Resort
     * @param  {int}   resortId Id of the Resort
     * @return {array} The corresponding Profile Picture if success - "Success: false" if not
     */
	public function readByResort($resortId) {

		$resort = Model::factory('Resort')->find_one($resortId);
		$profilePicture = $resort->getProfilePicture()->find_array();

		if( $profilePicture != null) {

			$results = array(
				'success' => true, 
				'profilePicture' => $profilePicture
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}
}
	
?>