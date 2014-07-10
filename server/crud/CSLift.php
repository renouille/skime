<?php
/**
 * CRUD service to read Lifts
 * Supported actions :
 * -- readAll
 * 
 * @author René Grossmann
 */
class CSLift {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSLift} An instance of the CSLift
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSLift();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() { }

    /**
     * Read all Lifts from Télé Villars-Gryon from the OSM data
     * @return {array} All corresponding Lifts if success - "Success: false" if not
     */
	public function readAll() {

		$ways = Model::factory('Way', 'osmdata')->where_raw('tags @> ? AND exist(tags,?)', array('"source"=>"Télé Villars-Gryon"', 'aerialway'))->find_many();

		if( $ways != null) {
			
			$result = array(
				"success"=>true,
				"lifts"=>array()
			);

			$hstoreConvertor = new HStoreConvertor();

			//WAYS
			foreach($ways as $way) {

				$properties = $hstoreConvertor->convert($way->tags);

				$coordinates = array();

				$nodes = ORM::for_table('nodes', 'osmdata')->raw_query('SELECT ST_AsGeoJSON(nodes.geom) as geometry FROM nodes INNER JOIN way_nodes ON nodes.id = way_nodes.node_id WHERE way_nodes.way_id = :wayId', array('wayId' => $way->id))->find_array();

				foreach($nodes as $node) {

					$point = json_decode($node['geometry']);
					array_push($coordinates, $point->coordinates);
				}

				$geojson = array(
					"type"=>"Feature",
					"properties"=> $properties,
					"geometry"=>array("type"=>"LineString", "coordinates"=>$coordinates)
				);

				$way->geojson = json_encode($geojson);
				$wayArray = $way->as_array();

				array_push($result["lifts"], $wayArray);
			}
		} else {
			$result = array(
				"success"=>false
			);
		}

		return($result);	
	}
}
	
?>