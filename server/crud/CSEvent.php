<?php
/**
 * CRUD service to Create, Read, Update and Delete Events
 * Supported actions:
 * -- create
 * -- read
 * 
 * @author René Grossmann
 */
class CSEvent {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSEvent} An instance of CSEvent
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSEvent();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

	/**
     * Create a new Event
     * @param  {array} element Data of the Event to create
     * @return {array} Event created if success - "Success: false" if not
     */
	public function create($element) {

		$event = Model::factory('Event')->create();
		$event->timestamp = date("Y-m-d H:i:s", $element['timestamp']);
		$event->eventtype_id = (int)$element['eventtype_id'];
		$event->user_id = (int)$element['user_id'];

		if(isset($element['group_id'])) {
			$event->group_id = (int)$element['group_id'];
		}

		try {
			$event->save();
			
			$results = array(
				"success"=>true,
				"event"=> array(
					'id' => $event->id,
					'timestamp' => strtotime($event->timestamp),
					'user_id' => $event->user_id,
					'group_id' => $event->group_id,
					'eventtype_id' => $event->eventtype_id
				)
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
			print_r($e);
		}

		return $results;
	}

	/**
	 * Read the corresponding Event
	 * @param  {int}   eventId Id of the Event
	 * @return {array} The corresponding Event if success - "Success: false" if not
	 */
	public function read($eventId) {

		$event = Model::factory('Event')->find_one($eventId);

		if( $event != null) {

			$results = array(
				'success' => true, 
				'event' => array( 
					'id' => $event->id,
					'timestamp' => strtotime($event->timestamp),
					'user_id' => $event->user_id,
					'group_id' => $event->group_id,
					'eventtype_id' => $event->eventtype_id
				)
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}
}
	
?>