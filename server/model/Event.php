<?php

/**
 * Class simulating an Event
 * 
 * @author René Grossmann
 */
class Event extends \Slim\ValidModel {
	public static $_table = 'Event';

	public function __construct()
    {
        // Validation model
        $this->addValidation('timestamp', 'required', 'A timestamp is required.');
        $this->addValidation('eventtype_id', 'required isInteger', 'A valid event type is required');
        $this->addValidation('user_id', 'required isInteger', 'A valid user is required.');
        $this->addValidation('group_id', 'isInteger', 'Group is not valid.');
    }

    /**
     * Get the associated Event
     * @return {Event} The associated Event
     */
    public function getUser() {
        return $this->belongs_to('User', 'user_id');
    }

    /**
     * Get the associated Group
     * @return {Group} The associated Group
     */
    public function getGroup() {
        return $this->belongs_to('Group', 'group_id');
    }

    /**
     * Get the associated Event type
     * @return {EventType} The associated Event type
     */
    public function getEventType() {
        return $this->belongs_to('EventType', 'eventtype_id');
    }

    /**
     * Get all the associated User notifications
     * @return {array} The associated User notifications
     */
    public function getUserNotifications() {
        return $this->has_many_through('User', 'UserNotification', 'event_id', 'user_id');
    }
}

?>
