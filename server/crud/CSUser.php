<?php
/**
 * CRUD service to Create, Read, Update and Delete Users
 * Supported actions:
 * -- create
 * -- read
 * -- read by email
 * -- read friends
 * -- login
 * 
 * @author René Grossmann
 */
class CSUser {

	/**
     * PHPass Hasher
     * @var PHPass
     */
	protected $hasher;

	/**
	 * CSCheckin
	 * @var CSCheckin
	 */
	protected $CSCheckin;

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSUser} An instance of CSUser
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSUser();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() { 
    	//Hashing password
		$this->hasher = new PasswordHash(8, false);

		$this->CSCheckin = CSCheckin::getInstance();
    }

	/**
     * Create a new User
     * @param  {array} element Data of the User to create
     * @return {array} The User created if success - "Success: false" if not
     */
	public function create($element) {

		
		$hash = $this->hasher->HashPassword($element['password']);

		$user = Model::factory('User')->create();
		$user->email = $element['email'];
		$user->name = $element['name'];
		$user->pwd_hash = $hash;
		$user->gender = 'undefined';
		$user->sport = 'ski';

		try {
			$user->save();
			
			$results = array(
				"success"=>true,
				"user"=> array(
					'email' => $user->email,
					'name' => $user->name,
					'gender' => $user->gender,
					'sport' => $user->sport,
				)
			);

		} catch (PDOException $e) {
			$results = array("success"=>false);
		}

		return $results;
	}

	/**
     * Check if user exists and if correct password provided
     * @param  {array} element Email and password of the User to login
     * @return {array} Email and id of the corresponding User if success - "Success: false" if not
     */
	public function login($element) {

		$user = Model::factory('User')->where('email', $element['email'])->find_one();

		if( $user != null) {
			
			if($this->hasher->CheckPassword($element['password'], $user->pwd_hash)) {
				
				$results = array(
					'success' => true, 
					'user' => array(
						'id' => $user->id,
						'email' => $user->email
					)
				);
			} else {
				$results = array("success"=>false);
			}
		} else {
			$results = array("success"=>false);
		}

		return($results);	
	}

	/**
     * Read the user with the corresponding email
     * @param  {string} usermail Email of the User
     * @return {array}  The corresponding User if success - "Success: false" if not
     */
	public function readByEmail($usermail) {

		$user = Model::factory('User')->where('email', $usermail)->find_one();

		if( $user != null) {

			$results = array(
				'success' => true, 
				'user' => $this->formatUser($user)
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
     * Read the user with the corresponding id
     * @param  {int}   id Id of the User
     * @return {array} The corresponding User if success - "Success: false" if not
     */
	public function read($id) {

		$user = Model::factory('User')->find_one($id);

		if( $user != null) {

			$results = array(
				'success' => true, 
				'user' => $this->formatUser($user)
			);
		} else {
			$results = array('success' => false);
		}

		return $results;
	}

	/**
     * Read all the friends of the user with the corresponding id
     * @param  {int}   id Id of the User
     * @return {array} The friends of the corresponding User if success- "Success: false" if not
     */
	public function readFriends($id) {

		$user = Model::factory('User')->find_one($id);

		if( $user != null) {
			$friendsArray = array();

			$friends = $user->getFriends()->find_many();
			foreach($friends as $friend) {
				array_push($friendsArray, $this->formatUser($friend));
			}
			
			$friends = $user->isFriendOf()->find_many();
			foreach($friends as $friend) {
				array_push($friendsArray, $this->formatUser($friend));
			}

			$results = array(
				'success' => true, 
				'friends' => $friendsArray
			);
		} else {
			$results = array('success' => false);
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