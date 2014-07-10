<?php

/**
 * Class simulating a Checkin
 * 
 * @author René Grossmann
 */
class Checkin extends \Slim\ValidModel {
	public static $_table = 'Checkin';

	public function __construct()
    {
        // Validation model
        $this->addValidation('position', 'required', 'A position is required');
        $this->addValidation('event_id', 'required isInteger', 'A valid event is required');
    }

    /**
     * Get the associated Event
     * @return {Event} The associated Event
     */
    public function getEvent() {
        return $this->belongs_to('Event');
    }
}

?>
