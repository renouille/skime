<?php
/**
 * Middleware to manage the Authentication service
 * Step 1: Check if request was sent less than 10 minutes from now to avoid replay attacks
 * Step 2: Check if the user id is valid and exists
 * Step 3: Check if the Authentication token is valid, exists and is not expired
 * If any of the steps is false, return a 401 unauthorized error
 *
 * @author René Grossmann
 */
class Auth extends \Slim\Middleware {
    
    /**
     * CRUD service object
     * @var CSUser
     */
    protected $CSUser;

    /**
     * CRUD service object
     * @var CSAuth
     */
    protected $CSAuth;

    /**
     * Public API key
     * @var string
     */
    protected $public_api_key;

    /**
    * Contructor
    */
    public function __construct() {
       $this->CSUser = CSUser::getInstance();
       $this->CSAuth =CSAuth::getInstance();
    }

    /**
    * Verifies that the user id is valid
    * @param  {int}     userId Id of the user
    * @return {boolean} True if valid
    *
    */
    private function isValidPublicKey($userId) {
        $user = $this->CSUser->read($userId);

        return $user['success'];
    }
    
    /**
     * Check if the Authentification token corresponds to the user, is valid and is not expired
     * @param  {string}  authToken Authentication token to check
     * @param  {int}     userId Id of the User
     * @return {boolean} True if valid
     */
    private function isValidToken($authToken, $userId) {
        $element = array('authToken' => $authToken, 'user_id' => $userId);
        return $this->CSAuth->isValid($element);    
    }

    /**
     * Deny Access by return a 401 error
     */   
    private function denyAccess() {
        $req = $this->app->request();
        $res = $this->app->response();
        $res->status(401);
        echo '401 NOT AUTHORIZED';
    }

    /**
     * Compare client timestamp with server to avoid replay attacks, 10 minuts limit else it is expired
     * @param {date}     timestamp timestamp to check
     * @return {boolean} True if timestamp less than 10 minutes from now
     */
    private function compareTimestamp($timestamp) {
        return (time() - $timestamp) < (60*10);
    }

    /**
     * Called before all routes to check if the user is authenticated and can have access to the API
     */
    public function call()
    {
        $req = $this->app->request();
        $res = $this->app->response();

        $authToken = $req->headers('SM-authToken');
        $userId = $req->headers('SM-userId');
        $timestamp = $req->headers('SM-timestamp');
        $pwd = $req->headers('SM-password');
        $usermail = $req->headers('SM-usermail');

        if($this->compareTimestamp($timestamp) && $timestamp != '') {

            if($this->isValidPublicKey($userId) && $userId != '') {

                if($this->isValidToken($authToken, $userId) && $authToken != '') {
                    $this->next->call();

                } else {
                    $this->denyAccess();
                } 
            } else if($req->isPost() && (strpos($req->getPathInfo(), '/users') == 0 || strpos($req->getPathInfo(), '/login') === 0)) {
                $this->next->call();
            } else {
                $this->denyAccess();
            }
        } else {
            $this->denyAccess();
        }
    }
}