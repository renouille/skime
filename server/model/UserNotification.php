<?php

/**
 * Class simulating a User Notification
 * 
 * @author René Grossmann
 */
class UserNotification extends \Slim\ValidModel {
	public static $_table = 'UserNotification';
    public static $_id_column = 'user_id';

	public function __construct()
    {
        // Validation model
        $this->addValidation('event_id', 'required isInteger', 'A valid event is required');
        $this->addValidation('user_id', 'required isInteger', 'A valid user is required.');
        $this->addValidation('isread', 'isBoolean', 'isRead is not valid.');
    }
}

?>
