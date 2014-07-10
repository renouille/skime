<?php

/**
 * Class simulating a User
 * 
 * @author René Grossmann
 */
class User extends \Slim\ValidModel {
	public static $_table = 'User';

	public function __construct()
    {
        // Validation model
        $this->addValidation('email', 'required isEmail', 'A valid email address is required.');
        $this->addValidation('email', 'maxLength|90', 'Email must be maximum 90 characters.');

        $this->addValidation('password', 'required', 'Password is required.');
        $this->addValidation('password', 'minLength|20', 'Password is too short.');

        $this->addValidation('name', 'required', 'Name is required.');
        $this->addValidation('name', 'onlyLetters', 'Name can only be composed of letters.');
        $this->addValidation('email', 'maxLength|32', 'Name must be maximum 32 characters.');

        $this->addValidation('birthday', 'isDate', 'Birthday must be a valid date.');

        $this->addValidation('sport', 'isString', 'Sport type must be a valid string.');
        $this->addValidation('style', 'isString', 'Sport style must be a valid string.');

        $this->addValidation('favresort', 'maxLength|32', 'Favorite resort name must be maximum 32 characters.');
        $this->addValidation('status', 'maxLength|140', 'Status must be maximum 32 characters.');

        $this->addValidation('topspeed', 'isInteger', 'Top speed must be a number.');
        $this->addValidation('distancetraveled', 'isInteger', 'Distance traveled must be a number.');
    }

    /**
     * Get the associated Authentication token
     * @return {AuthToken} The associated Authentication token
     */
    public function getToken() {
        return $this->has_one('AuthToken', 'user_id');
    }

    /**
     * Get the associated Country
     * @return {Country} The associated Country
     */
    public function getCountry() {
        return $this->belongs_to('Country', 'country_id');
    }

    /**
     * Get all the associated Events
     * @return {array} The associated Events
     */
    public function getEvents() {
        return $this->has_many('Event', 'user_id');
    }

    /**
     * Get all the associated Pictures
     * @return {array} The associated Pictures
     */
    public function getPictures() {
        return $this->has_many('Picture', 'user_id');
    }

    /**
     * Get the associated Profile Picture
     * @return {ProfilePicture} The associated Profile Picture
     */
    public function getProfilePicture() {
        return $this->has_one('ProfilePicture', 'user_id');
    }

    /**
     * Get all the Groups of the User
     * @return {array} Groups of the User
     */
    public function getGroups() {
        return $this->has_many_through('Group', 'GroupMember', 'user_id', 'group_id');
    }

    /**
     * Get all the Users who accepted the friendship request of the User
     * @return {array} Friends of the User
     */
    public function getFriends() {
        return $this->has_many_through('User', 'Friendship', 'fromuser_id', 'touser_id');
    }

    /**
     * Get all the Users who requested the friendship
     * @return {array} Users who requested the friendship
     */
    public function isFriendOf() {
        return $this->has_many_through('User', 'Friendship', 'touser_id', 'fromuser_id');
    }

    /**
     * Get all the notifications of the User
     * @return {Event} Notifications of the User
     */
    public function getUserNotifications() {
        return $this->has_many_through('Event', 'UserNotification', 'user_id', 'event_id');
    }
}

?>
