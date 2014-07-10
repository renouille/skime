<?php

namespace Slim;

class Engine
{
    /**
    * Validation methods are stored here so they can easily be overwritten
    */
    protected $_checks;

    public function __construct()
    {
        $this->_checks = array(
            'required'    => array($this, '_required'),
            'minLength'   => array($this, '_minLength'),
            'maxLength'   => array($this, '_maxLength'),
            'isEmail'     => array($this, '_isEmail'),
            'onlyLetters' => array($this, '_onlyLetters'),
            'isInteger'   => array($this, '_isInteger'),
            'isString'    => array($this, '_isString'),
            'isBool'      => array($this, '_isBool'),
            'isFriendshipStatus' => array($this, '_isFriendshipStatus'),
            'isDate' => array($this, '_isDate')
        );
    }

    public function __call($name, $args) 
    {
        if (!isset($this->_checks[$name])) 
            throw new \InvalidArgumentException("{$name} is not a valid validation function.");

        $val = array_shift($args);
        $args = array_shift($args);

        return call_user_func($this->_checks[$name], $val, $args);
    }

    public function executeOne($check, $val, $params=array())
    {
        return call_user_func(__NAMESPACE__ .'\Engine::'.$check, $val, $params);
    }

    /**
    * @param string label used to call function
    * @param Callable function with params (value, additional params as array)
    */
    public function addValidator($label, $function)
    {
        if (isset($this->_checks[$label])) throw Exception();
        $this->setValidator($label, $function);
    }

    public function setValidator($label, $function)
    {
        $this->_checks[$label] = $function;
    }

    public function removeValidator($label)
    {
        unset($this->_checks[$label]);
    }

    /**
    * @return string The list of usable validator methods
    */
    public function getValidators()
    {
        return array_keys($this->checks);
    }

    ///// Validator methods
    protected function _isEmail($val, $params)
    {
        return FALSE !== filter_var($val, FILTER_VALIDATE_EMAIL);
    }

    protected function _isInteger($val, $params)
    {
        if (!is_numeric($val)) return false;
        $int = intval($val);
        return (bool)is_int($int);
    }

    protected function _isString($val, $params) {

        return is_string($val);
    }

    protected function _isBool($val, $params) {

        return is_bool($val);
    }

    protected function _onlyLetters($val, $params) {

        return preg_match("/^([^0-9]*)$/",$val);
    }

    protected function _minLength($val, $params)
    {
        $len = array_shift($params);
        return strlen($val) >= $len;
    }

    protected function _maxLength($val, $params)
    {
        $len = array_shift($params);
        return strlen($val) <= $len;
    }

    protected function _isFriendshipStatus($val, $params)
    {
        return ($val === 'pending' || $val === 'accepted' || $val === 'rejected');
    }

    protected function _isDate($val, $params) {
        $date = date_parse($val);
        return checkdate($date["month"], $date["day"], $date["year"]);
    }

    protected function _required($val, $params=array())
    {
        return !(($val === null) || empty($val));
    }
}