<?php

/**
 * Class simulating a many-to-many association between relations and ways
 * 
 * @author René Grossmann
 */
class RelationWay extends Model {
	public static $_connection_name = 'osmdata';
	public static $_table = 'relation_members';

}
?>