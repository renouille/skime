<?php
/**
 * CRUD service to Create, Read, Update and Delete Resorts
 * Supported actions:
 * -- read
 * 
 * @author René Grossmann
 */
class CSResort {

	/**
	 * CRUD service object
	 * @var CSWebcam
	 */
	protected $CSWebcam;

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSResort} An instance of CSResort
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSResort();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {
    	$this->CSWebcam = CSWebcam::getInstance();
    }

	/**
     * Read the Resort with the corresponding id
     * @param  {int}   id Id of the Resort
     * @return {array} The corresponding Resort if success - "Success: false" if not
     */
	public function read($id) {

		$resort = Model::factory('Resort')->find_one($id);

		if( $resort != null) {

			$pictures = $resort->getPictures()->find_array();
			$webcams = $resort->getWebcams()->find_array();
			$profilePicture = $resort->getProfilePicture()->find_array();

			$results = array(
				'success' => true, 
				'resort' => $this->formatResort($resort)
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
	 * Read all the resorts 
	 * @return {array} List of all Resorts if success - "Success: false" if not
	 */
	public function readAll() {

		$resorts = Model::factory('Resort')->find_many();

		if( $resorts != null) {

			$resortsArray = array();

			foreach($resorts as $resort) {
				array_push($resortsArray, $this->formatResort($resort));
			}

			$results = array(
				'success' => true, 
				'resorts' => $resortsArray
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
	* Create an Array of Resort with the associated informations
	* @param  {Resort} resort Resort to format
	* @return {array}  Resort formatted as array
	*/
	private function formatResort($resort) {

		$pictures = $resort->getPictures()->find_array();
		$webcams = $this->CSWebcam->readByResort($resort->id);
		$profilePicture = $resort->getProfilePicture()->find_array();

		$resortArray = array(
			'id' => $resort->id,
			'name' => $resort->name,
			'boundaries' => $resort->boundaries,
			'description' => $resort->description,
			'pisteskm' => $resort->pisteskm,
			'liftsnumber' => $resort->liftsnumber,
			'seasonstart' => $resort->seasonstart,
			'seasonend' => $resort->seasonend,
			'openfrom' => $resort->openfrom,
			'openuntil' => $resort->openuntil,
			'website' => $resort->website,
			'country_code' => $resort->country_code,
			'contact_tourism' => $resort->contact_tourism,
			'contact_lifts' => $resort->contact_lifts,
			'profilePicture' => $profilePicture,
			'pictures' => $pictures,
			'webcams' => $webcams['webcams']
		);

		return $resortArray;
	}
}
	
?>