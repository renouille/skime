<?php

/**
 * Class simulating an Event Type
 * 
 * @author René Grossmann
 */
class EventType extends \Slim\ValidModel {
	public static $_table = 'EvemtType';

	public function __construct()
    {
        // Validation model
        $this->addValidation('type', 'required', 'A type name is required.');
    }

    /**
     * Get all the associated Events
     * @return {array} The associated Events
     */
    public function getEvents() {
        return $this->has_many('Event');
    }
}

?>
