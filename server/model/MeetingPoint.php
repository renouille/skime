<?php

/**
 * Class simulating a Meeting Point
 * 
 * @author René Grossmann
 */
class MeetingPoint extends \Slim\ValidModel {
	public static $_table = 'MeetingPoint';

	public function __construct()
    {
        // Validation model
        $this->addValidation('timestamp', 'required', 'A timestamp is required.');
        $this->addValidation('isactive', 'required', 'A valid "active" parameter is required.');
        $this->addValidation('comments', 'maxLength|140', 'Comments are not valid.');
        $this->addValidation('position', 'required', 'A position is required.');
        $this->addValidation('event_id', 'required isInteger', 'A valid event is required.');
    }

    /**
     * Get the associated Event
     * @return {Event} The associated Event
     */
    public function getEvent() {
        return $this->belongs_to('Event', 'event_id');
    }
}

?>
