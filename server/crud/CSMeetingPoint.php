<?php
/**
 * CRUD service to Create, Read, Update and Delete Meeting Points
 * Supported actions:
 * -- create
 * -- read
 * -- read by User
 * -- update
 * 
 * @author René Grossmann
 */
class CSMeetingPoint {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSMeetingPoint} An instance of CSMeetingPoint
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSMeetingPoint();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Create a new Meeting Point
     * @param  {array} element Data of the Meeting Point to create
     * @return {array} The Meeting Point created if success - "Success: false" if not
     */
	public function create($element) {

		$position = json_decode($element['position'], true);

		$meetingPoint = Model::factory('MeetingPoint')->create();
		$meetingPoint->set_expr('position', 'ST_SetSRID(ST_MakePoint('.$position['lng'].','.$position['lat'].'), 4326)');
		$meetingPoint->timestamp = date("Y-m-d H:i:s", $element['timestamp']);
		$meetingPoint->isactive = $element['isactive'];
		$meetingPoint->comments = $element['comments'];
		$meetingPoint->event_id = $element['event_id'];

		try {
			$meetingPoint->save();
			
			$event = $meetingPoint->getEvent()->find_array();

			$results = array(
				"success"=>true,
				"meetingPoint"=> array(
					'id' => $meetingPoint->id,
					'timestamp' => strtotime($meetingPoint->timestamp),
					'isactive' => $meetingPoint->isactive,
					'comments' => $meetingPoint->comments,
					'position' => $element['position'], //Array of latLng readable by the the client
					'event_id' => $meetingPoint->event_id,
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
	 * Read the meeting point corresponding to the id
	 * @param  {int}   mpId Id of the meeting point
	 * @return {array} The corresponding meeting point if success - "Success: false" if not
	 */
	public function read($mpId) {

		$meetingPoint = ORM::for_table('MeetingPoint')
			->raw_query('SELECT "MeetingPoint".*, ST_X("MeetingPoint".position) AS "lng", ST_Y("MeetingPoint".position) AS "lat" 
				FROM "MeetingPoint" 
				WHERE "MeetingPoint".id = :mpId', array('mpId' => $mpId))
			->find_one();

		if($meetingPoint != null) {

			$event = Model::factory('Event')->find_one($meetingPoint->event_id);

			$meetingPointArray = array(
				'id' => $meetingPoint->id,
				'timestamp' => strtotime($meetingPoint->timestamp),
				'position' => json_encode(array('lat' => $meetingPoint->lat, 'lng' => $meetingPoint->lng)),
				'isactive' => $meetingPoint->isactive,
				'comments' => $meetingPoint->comments,
				'event_id' => $meetingPoint->event_id,
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
				"meetingPoint"=> $meetingPointArray
			);
		} else {
			$results = array(
				"success"=>false,
				'meetingPoint' => null
			);
		}

		return $results;
	}

	/**
	 * Read all active Meeting Points corresponding to the user
	 * @param  {int}   userId Id of the user
	 * @return {array} The corresponding Meeting Points if success - "Success: false" if not
	 */
	public function readByUser($userId) {

		$meetingPoints = ORM::for_table('MeetingPoint')
			->raw_query('SELECT DISTINCT "MeetingPoint".*, "MeetingPoint".id AS "meetingPointId", ST_X("MeetingPoint".position) AS "lng", ST_Y("MeetingPoint".position) AS "lat"
				FROM "MeetingPoint"
				INNER JOIN "Event" ON "Event".id = "MeetingPoint".event_id
				INNER JOIN "UserNotification" ON "UserNotification".event_id = "Event".id
				WHERE ("Event".user_id = :userId OR "UserNotification".user_id = :userId)
				AND "MeetingPoint".isactive = true', array('userId' => $userId))
			->find_many();

		if($meetingPoints != null) {

			$meetingPointsArray = array();

			foreach($meetingPoints as $meetingPoint) {

				$event = Model::factory('Event')->find_one($meetingPoint->event_id)->as_array();

				$meetingPointArray = array(
					'id' => $meetingPoint->meetingPointId,
					'timestamp' => strtotime($meetingPoint->timestamp),
					'position' => json_encode(array('lat' => $meetingPoint->lat, 'lng' => $meetingPoint->lng)),
					'isactive' => $meetingPoint->isactive,
					'comments' => $meetingPoint->comments,
					'event_id' => $meetingPoint->event_id,
					'event' => $event
				);

				array_push($meetingPointsArray, $meetingPointArray);
			}

			$results = array(
				"success"=>true,
				"meetingPoints"=> $meetingPointsArray
			);
		} else {
			$results = array(
				"success"=>false,
				'meetingPoints' => null
			);
		}

		return $results;
	}

	/**
	 * Update the corresponding Meeting Point
	 * @param  {int}   mpId Id of the Meeting Point
	 * @param  {array} element Data of the Meeting point to update
	 * @return {array} The Meeting Point updated if success - "Success: false" if not
	 */
	public function update($mpId, $element) {

		$position = json_decode($element['position'], true);

		$meetingPoint = Model::factory('MeetingPoint')->find_one($mpId);
		$meetingPoint->timestamp = date("Y-m-d H:i:s", $element['timestamp']);
		$meetingPoint->isactive = $element['isactive'];
		$meetingPoint->comments = $element['comments'];
		$meetingPoint->set_expr('position', 'ST_SetSRID(ST_MakePoint('.$position['lng'].','.$position['lat'].'), 4326)');
		$meetingPoint->event_id = $element['event_id'];

		try {
			$meetingPoint->save();
		
			$event = $meetingPoint->getEvent()->find_one();
			$userCreator = $event->getUser()->find_one();
			$group = $event->getGroup()->find_array();

			$results = array(
				"success"=>true,
				"meetingPoints"=> array(
					'id' => $meetingPoint->id,
					'timestamp' => strtotime($meetingPoint->timestamp),
					'isactive' => $meetingPoint->isactive,
					'comments' => $meetingPoint->comments,
					'position' => $element['position'],
					'event' => array(
						'id' => $event->id,
						'timestamp' => $event->timestamp,
						'user' => array(
							'id' => $userCreator->id,
							'name' => $userCreator->name
						),
						'group' => $group
					)
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