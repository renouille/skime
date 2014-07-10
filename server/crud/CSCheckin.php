<?php
/**
 * CRUD service to Create, Read, Update and Delete Checkins
 * Supported actions:
 * -- create
 * -- read
 * -- read by user
 * 
 * @author René Grossmann
 */
class CSCheckin {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSCheckin} An instance of CSCheckin
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSCheckin();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Create a new Checkin
     * @param  {array} element Data of the Check to create
     * @return {array} Checkin created if success - "Success: false" if not
     */
	public function create($element) {

		$position = json_decode($element['position'], true);
		
		$checkin = Model::factory('Checkin')->create();
		$checkin->set_expr('position', 'ST_SetSRID(ST_MakePoint('.$position['lng'].','.$position['lat'].'), 4326)');
		$checkin->event_id = $element['event_id'];

		try {
			$checkin->save();
			
			$event = $checkin->getEvent()->find_array();

			$results = array(
				"success"=>true,
				"checkin"=> array(
					'id' => $checkin->id,
					'position' => $element['position'], //Array of LatLng readable by the the client
					'event_id' => $checkin->event_id,
					'event' => $event				
				)
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
			echo $e;
		}

		return $results;
	}

	/**
	 * Read the last checkin of the corresponding user
	 * @param  {int}   userId Id of the user
	 * @return {array} Last Checkin corresponding to the user if success - "Success: false" if not
	 */
	public function readByUser($userId) {

		$checkin = ORM::for_table('Checkin')
			->raw_query('SELECT "Checkin".*, "Checkin".id AS "checkinId", ST_X("Checkin".position) AS "lng", ST_Y("Checkin".position) AS "lat" 
				FROM "Checkin" 
				INNER JOIN "Event" ON "Event".id = "Checkin".event_id
				WHERE "Event".user_id = :userId
				ORDER BY "Event".timestamp DESC
				LIMIT 1', array('userId' => $userId))
			->find_one();

		if($checkin != null) {

			$event = Model::factory('Event')->find_one($checkin->event_id);

			$checkinArray = array(
				'id' => $checkin->checkinId,
				'position' => json_encode(array('lat' => $checkin->lat, 'lng' => $checkin->lng)),
				'event_id' => $event->id,
				'event' => array(
					'id' => $event->id,
					'timestamp' => strtotime($event->timestamp),
					'user_id' => $event->user_id,
					'group_id' => $event->group_id,
					'eventtype_id' => $event->eventtype_id
				)
			);

			$results = array(
				"success"=>true,
				"checkin"=> $checkinArray
			);
		} else {
			$results = array(
				"success"=>false,
				'checkin' => null
			);
		}

		return $results;
	}

	/**
	 * Read the checkin corresponding to the id
	 * @param  {int}   checkinId Id of the checkin
	 * @return {array} The corresponding checkin if success - "Success: false" if not
	 */
	public function read($checkinId) {

		$checkin = ORM::for_table('Checkin')
			->raw_query('SELECT "Checkin".*, ST_X("Checkin".position) AS "lng", ST_Y("Checkin".position) AS "lat" 
				FROM "Checkin" 
				WHERE "Checkin".id = :checkinId', array('checkinId' => $checkinId))
			->find_one();

		if($checkin != null) {

			$event = Model::factory('Event')->find_one($checkin->event_id);

			$checkinArray = array(
				'id' => $checkin->id,
				'position' => json_encode(array('lat' => $checkin->lat, 'lng' => $checkin->lng)),
				'event_id' => $checkin->event_id,
				'event' => array(
					'id' => $event->id,
					'timestamp' => strtotime($event->timestamp),
					'user_id' => $event->user_id,
					'group_id' => $event->group_id,
					'eventtype_id' => $event->eventtype_id
				)
			);

			$results = array(
				"success"=>true,
				"checkin"=> $checkinArray
			);
		} else {
			$results = array(
				"success"=>false,
				'checkin' => null
			);
		}

		return $results;
	}
}
	
?>