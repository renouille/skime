<?php
/**
 * CRUD service to Create, Read, Update and Delete Pictures
 * Supported actions:
 * -- create
 * -- read by user
 * 
 * @author René Grossmann
 */
class CSPicture {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSPicture} An instance of CSPicture
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSPicture();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Create a new Picture
     * @param  {array} element Data of the Picture to create
     * @return {array} The Picture created if success - "Success: false" if not
     */
	public function create($element) {

		$picture = Model::factory('Picture')->create();
		$picture->title = $element['title'];
		$picture->description = $element['description'];
		$picture->position = $element['position'];
		$picture->url = $element['url'];
		$picture->url_thumbnail = (int)$element['url_thumbnail'];
		$picture->user_id = (int)$element['user_id'];
		$picture->resort_id = (int)$element['resort_id'];

		try {
			$picture->save();
			
			$results = array(
				"success"=>true,
				"picture"=> $picture->as_array()
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
		}

		return $results;
	}

	/**
     * Read all the pictures of the corresponding User
     * @param  {int}   userId Id of the user
     * @return {array} All the corresponding Pictures if success - "Success: false" if not
     */
	public function readByUser($userId) {

		$user = Model::factory('User')->find_one($userId);
		$pictures = $user->getPictures()->find_array();

		if( $pictures != null) {

			$results = array(
				'success' => true, 
				'pictures' => $pictures
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
     * Read all the pictures of the corresponding Resort
     * @param  {int}   resortId Id of the Resort
     * @return {array} All the corresponding Pictures if success - "Success: false" if not
     */
	public function readByResort($resortId) {

		$resort = Model::factory('Resort')->find_one($resortId);
		$pictures = $resort->getPictures()->find_array();

		if( $pictures != null) {

			$results = array(
				'success' => true, 
				'pictures' => $pictures
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}
}
	
?>