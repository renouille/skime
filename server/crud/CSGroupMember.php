<?php
/**
 * CRUD service to Create, Read, Update and Delete Group Members
 * Supported actions:
 * -- create
 * -- read by group
 * 
 * @author René Grossmann
 */
class CSGroupMember {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSGroupMember} An instance of CSGroupMember
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSGroupMember();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}


	/**
     * Create a new Group Member
     * @param  {array} element Data of the GroupMember to create
     * @return {array} The GroupMember created if success - "Success: false" if not
     */
	public function create($element) {

		$groupMember = Model::factory('GroupMember')->create();
		$groupMember->user_id = $element['user_id'];
		$groupMember->group_id = $element['group_id'];

		try {
			$groupMember->save();
			
			$results = array(
				"success"=>true,
				"groupMembers"=> array(
					'user_id' => $groupMember->user_id,
					'group_id' => $groupMember->group_id
				)
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
			print_r($e);
		}

		return $results;
	}

	/**
	 * Read all GroupMembers member of the corresponding Group
	 * @param  {int}   groupId Id of the group
	 * @return {array} All corresponding GroupMembers if success - "Success: false" if not
	 */
	public function readByGroup($groupId) {

		$group = Model::factory('Group')->find_one($groupId);

		if($group != null) {


			$groupMembersArray = array();
			$groupMembers = $group->getMembers()->find_many();

			foreach ($groupMembers as $member) {
					
				$groupMemberArray = array(
					'id' => $member->id,
					'name' => $member->name,
					'email' => $member->email,
					'gender' => $member->gender,
					'birthday' => $member->birthday,
					'sport' => $member->sport,
					'style' => $member->style,
					'favresort' => $member->favresort,
					'status' => $member->status,
					'topspeed' => $member->topspeed,
					'distancetraveled' => $member->distancetraveled,
					'country_code' => $member->country_code,
					'pictures' => $member->getPictures()->find_array()
				);

				array_push($groupMembersArray, $groupMemberArray);
			}
			
			$results = array(
				"success"=>true,
				"groupMembers"=> $groupMembersArray
			);
		} else {
			$results = array(
				"success"=>false,
				'groupMembers' => null
			);
		}

		return $results;
	}
}
	
?>