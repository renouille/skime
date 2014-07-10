<?php
/**
 * CRUD service to Create, Read, Update and Delete Friendships
 * Supported actions:
 * -- create
 * 
 * @author René Grossmann
 */
class CSFriendship {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSFriendship} An instance of CSFriendship
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSFriendship();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}


	/**
     * Create a new Friendship
     * @param  {array} element Data of the Friendship to create
     * @return {array} Friendship created if success - "Success: false" if not
     */
	public function create($element) {

		$friendship = Model::factory('Friendship')->create();
		$friendship->fromUser_id = $element['fromUserId'];
		$friendship->toUser_id = $element['toUserId'];
		$friendship->status = $element['status'];

		try {
			$friendship->save();
			
			$results = array(
				"success"=>true,
				"friendship"=> array(
					'fromUser_id' => $friendship->fromUser_id,
					'toUser_id' => $friendship->toUser_id,
					'status' => $friendship->status
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