<?php

/**
 * Class simulating a Group Member
 * 
 * @author René Grossmann
 */
class GroupMember extends \Slim\ValidModel {
	public static $_table = 'GroupMember';
    public static $_id_column = 'user_id';

	public function __construct()
    {
        // Validation model
        $this->addValidation('group_id', 'required isInteger', 'A valid group is required');
        $this->addValidation('user_id', 'required isInteger', 'A valid user is required.');
    }
}

?>
