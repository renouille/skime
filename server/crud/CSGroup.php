<?php
/**
 * CRUD service to Create, Read, Update and Delete Groups
 * Supported actions:
 * -- create
 * -- read by user
 * 
 * @author René Grossmann
 */
class CSGroup {

	/**
	 * CSCheckin
	 * @var CSCheckin
	 */
	protected $CSCheckin;

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSGroup} An instance of CSGroup
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSGroup();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() { 
    	$this->CSCheckin = CSCheckin::getInstance();
    }

	/**
     * Create a new Group
     * @param  {array} element Data of the group to create
     * @return {array} The created Group if success - "Success: false" if not
     */
	public function create($element) {

		$group = Model::factory('Group')->create();
		$group->name = $element['name'];

		try {
			$group->save();

			$results = array(
				"success"=>true,
				"groups"=> array(
					'id' => $group->id,
					'name' => $group->name,
				)
			);
		} catch (PDOException $e) {
			$results = array("success"=>false);
		}

		return $results;
	}

	/**
     * Read all Groups having as member the corresponding user
     * @param  {int}   userId Id of the user
     * @return {array} All corresponding Groups if success - "Success: false" if not
     */
	public function readByUser($userId) {
		
		$user = Model::factory('User')->find_one($userId);

		if($user != null) {

			$groups = $user->getGroups()->find_many();

			if($groups != null) {

				$groupsArray = array();

				foreach($groups as $group) {

					$groupMembersArray = array();
					$groupMembers = $group->getMembers()->find_many();

					foreach ($groupMembers as $member) {

						array_push($groupMembersArray, $this->formatUser($member));
					}

					$groupArray = array(
						'id' => $group->groupId,
						'name' => $group->name,
						'members' => $groupMembersArray
					);

					array_push($groupsArray, $groupArray);
				}

				$results = array(
					"success"=>true,
					"groups"=> $groupsArray
				);
			} else {
				$results = array(
					"success"=>false,
					'groups' => null
				);
			}
		} else {
			$results = array(
				"success"=>false,
				'groups' => null
			);
		}

		return $results;
	}

	/**
	* Create an Array of User with the public informations
	* @param  {User}  user User to format
	* @return {array} User formatted as array
	*/
	public function formatUser($user) {

		$pictures = $user->getPictures()->find_many();
		$profilePicture = $user->getProfilePicture()->find_one();
		$country = $user->getCountry()->find_one();
		$checkin = $this->CSCheckin->readByUser($user->id);

		if($pictures != null) {
			$pictures = $pictures->as_array();
		}

		if($profilePicture != null) {
			$profilePicture = $profilePicture->as_array();
		}

		if($country != null) {
			$country = $country->as_array();
		}

		$userFormatted = array(
			'id' => $user->id,
			'name' => $user->name,
			'email' => $user->email,
			'gender' => $user->gender,
			'birthday' => $user->birthday,
			'sport' => $user->sport,
			'style' => $user->style,
			'favresort' => $user->favresort,
			'status' => $user->status,
			'topspeed' => $user->topspeed,
			'distancetraveled' => $user->distancetraveled,
			'country_code' => $user->country_id,
			'country' => $country,
			'profilePicture' => $profilePicture,
			'pictures' => $pictures,
			'checkin' => $checkin['checkin']
		);

		return $userFormatted;
	}
}
	
?>