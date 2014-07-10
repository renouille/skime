<?php
/**
 * CRUD service to Create, Read, Update and Delete Authentication tokens
 * Supported actions:
 * -- create
 * -- delete
 * -- isValid
 * 
 * @author René Grossmann
 */
class CSAuth {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSAuth} An instance of CSAuth
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSAuth();
        }
        return $inst;
    }

	/**
     * Constructor
     */
    private function __construct() {}

	/**
     * Create a new Authentication token, if the user already has a token, delete it
     * @param  {array} element Data of the Authentication token to create
     * @return {array} The Authentication token if succes - "Success: false" if not
     */
	public function create($element) {

		//Delete all already existing token associated to the user
		Model::factory('AuthToken')->where('user_id', $element['user_id'])->delete_many();

		$token = Model::factory('AuthToken')->create();
		$token->token = $element['authToken'];
		$token->timestamp = date("Y-m-d H:i:s", time());
		$token->user_id = $element['user_id'];

		try {
			$token->save();
			$results = array(
				'success' => 'true',
				'authToken' => array(
					'token' => $token->token,
					'timestamp' => $token->timestamp,
					'user_id' => $token->user_id
				)
			);
		} catch(PDOException $e) {
			$results = array('success' => 'false');
		}

		return $results;
	}

	/**
     * Delete the corresponding Authentication token
     * @param  {array} element The Authentication token data to delete
     * @return {array} "Succes: true" if success - "Success: false" if not
     */
	public function delete($element) {

		$token = Model::factory('AuthToken')->find_one($element['authToken']);

		try {
			$token->delete();
			$results = array(
				'success' => 'true',
			);
		} catch(PDOException $e) {
			$results = array('success' => 'false');
		}

		return $results;
	}

	/**
     * Check if the Authentication token provided exists
     * @param  {array}   element The Authentication token to check
     * @return {boolean} True if exists - False if not
     */
	public function isValid($element) {

		$authToken = Model::factory('AuthToken')->where('user_id', $element['user_id'])->find_one($element['authToken']);

		if($authToken != false) {

			if(strtotime($authToken->timestamp) >= strtotime("-240 minutes")) {
				return true;
			} else {
				$this->delete($element);
				return false;
			}
		} else {
			return false;
		}
	}
}
	
?>