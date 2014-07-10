<?php

/**
 * Class simulating a Relation from OSM
 * 
 * @author: René Grossmann
 */
class Relation extends Model {
	public static $_connection_name = 'osmdata';
	public static $_table = 'relations';

    /**
     * Get all the associated Ways
     * @return {array} All the associated Ways
     */
    public function getWays() {
        return $this->has_many_through('Way', 'RelationWay', 'relation_id', 'member_id');
    }
}

?>
