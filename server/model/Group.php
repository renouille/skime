<?php

/**
 * Class simulating a Group
 * 
 * @author René Grossmann
 */
class Group extends \Slim\ValidModel {
	public static $_table = 'Group';

	public function __construct()
    {
        // Validation model
        $this->addValidation('name', 'required maxLength|32', 'Name is required and must be maximum 32 characters.');
    }

    /**
     * Get all the associated Events
     * @return {array} The associated Events
     */
    public function getEvents() {
        return $this->has_many('Event', 'group_id');
    }

    /**
     * Get all the Users member of the Group
     * @return {array} The members of the Group
     */
    public function getMembers() {
        return $this->has_many_through('User', 'GroupMember', 'group_id', 'user_id');
    }
}

?>
