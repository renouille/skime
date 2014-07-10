<?php

/**
 * Class simulating a Way from OSM
 *
 * @author René Grossmann
 */
class Way extends Model {
	public static $_connection_name = 'osmdata';
	public static $_table = 'ways';

    /**
     * Get all the associated Relations
     * @return {array} All the associated Relations
     */
    public function getRelations() {
        return $this->has_many_through('Relation', 'RelationWay', 'member_id', 'relation_id');
    }
}

?>
