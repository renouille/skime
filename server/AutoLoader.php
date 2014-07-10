<?php

class AutoLoader {
    protected static $paths = array(
        "model/",
        "crud/",
        "routes/",
        "utils/",
        "middleware/"
    );

    public static function load($class) {
        $classPath = $class; 
        foreach (self::$paths as $path) {
            if (is_file($path . $classPath . '.php')) {
                require_once $path . $classPath . '.php';
                return;
            }
        }
    }
}
spl_autoload_register(array('AutoLoader', 'load'));

?>