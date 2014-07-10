<?php

/**
 * Class to convert a HSTORE object to an Array
 * @author stackoverflow.com
 */
class HStoreConvertor {

	public function convert($hstore) {

		$hstore = preg_replace('/([$])/', "\\\\$1", $hstore);
  		$unescapedHStore = array();
  		eval('$unescapedHStore = array(' . $hstore . ');');

  		return $unescapedHStore;
	}
}

?>