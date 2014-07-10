<?php
/**
 * CRUD service to Create, Read, Update and Delete User Notification
 * Supported actions:
 * -- create
 * 
 * @author René Grossmann
 */
class CSUserNotification {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSUserNotification} An instance of CSUserNotification
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSUserNotification();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}


	/**
     * Create a new User Notification
     * @param  {array} element Data of the User Notification to create
     * @return {array} The User Notification created if success - "Success: false" if not
     */
	public function create($element) {

		$userNotification = Model::factory('UserNotification')->create();
		$userNotification->user_id = $element['user_id'];
		$userNotification->event_id = $element['event_id'];

		try {
			$userNotification->save();
			
			$results = array(
				"success"=>true,
				"userNotification"=> array(
					'user_id' => $userNotification->user_id,
					'event_id' => $userNotification->event_id,
					'isRead' => $userNotification->isRead,
					'timestamp' => $userNotification->timestamp
				)
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
			print_r($e);
		}

		return $results;
	}
}
	
?>