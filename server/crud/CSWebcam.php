<?php
/**
 * CRUD service to Create, Read, Update and Delete Webcams
 * Supported actions:
 * -- read by resort
 * -- read all
 * 
 * @author René Grossmann
 */
class CSWebcam {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSWebcam} An instance of CSWebcam
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSWebcam();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}


	/**
     * Read all the pictures of the corresponding Resort
     * @param  {int}   resortId Id of the Resort
     * @return {array} All the corresponding Webcams if success - "Success: false" if not
     */
	public function readByResort($resortId) {

		$webcams = ORM::for_table('Webcam')
			->raw_query('SELECT "Webcam".*, ST_X("Webcam".position) AS "lng", ST_Y("Webcam".position) AS "lat"
				FROM "Webcam"
				WHERE "Webcam".resort_id = :resortId', array('resortId' => $resortId))
			->find_many();

		if( $webcams != null) {

			$webcamsArray = array();

			foreach($webcams as $webcam) {

				$webcamArray = array(
					'id' => $webcam->id,
					'url' => $webcam->url,
					'title' => $webcam->title,
					'position' => json_encode(array('lat' => $webcam->lat, 'lng' => $webcam->lng)),
					'resort_id' => $webcam->resort_id,
				);

				array_push($webcamsArray, $webcamArray);
			}

			$results = array(
				'success' => true, 
				'webcams' => $webcamsArray
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
     * Read all Webcams
     * @return {array} All Webcams if success - "Success: false" if not
     */
	public function readAll() {

		$webcams = Model::factory('Webcam')->find_array();

		if( $webcams != null) {

			$results = array(
				'success' => true, 
				'webcams' => $webcams
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}
}
	
?>