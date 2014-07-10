<?php
/**
 * CRUD service to read Pistes
 * Supported actions:
 * -- read all
 * 
 * @author René Grossmann
 */
class CSPiste {

	/**
     * Get the Singleton instance of the object
     *
     * @return {CSPiste} An instance of CSPiste
     */
    public static function getInstance()
    {
        static $inst = null;
        if ($inst === null) {
            $inst = new CSPiste();
        }
        return $inst;
    }

	/**
     * Constructor
     * Initialize the model needed
     */
    private function __construct() {}

    /**
     * Read all Pistes from Télé Villars-Gryon from the OSM data
     * @return {array} All the corresponding Pistes
     */
	public function readAll() {

		$ways = Model::factory('Way', 'osmdata')->where_raw('tags @> ? AND tags @> ? ::hstore', array('"source"=>"Télé Villars-Gryon"', '"piste:type"=>"downhill"'))->find_many();
		$relations = Model::factory('Relation', 'osmdata')->where_raw('tags @> ? AND tags @> ? ::hstore', array('"source"=>"Télé Villars-Gryon"', '"piste:type"=>"downhill"'))->find_many();

		if( $ways != null && $relations != null) {
			
			$result = array(
				"success"=>true,
				"pistes"=>array()
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
					"geometry"=>array("type"=>"Polygon", "coordinates"=>array($coordinates))
				);

				$way->geojson = json_encode($geojson);
				$wayArray = $way->as_array();

				array_push($result["pistes"], $wayArray);
			}

			//RELATIONS
			foreach($relations as $relation) {

				$properties = $hstoreConvertor->convert($relation->tags);

				$ways = $relation->getWays()->find_many();

				$coordinatesWay = array();

				foreach($ways as $way) {
					$coordinates = array();

					$nodes = ORM::for_table('nodes', 'osmdata')->raw_query('SELECT ST_AsGeoJSON(nodes.geom) as geometry FROM nodes INNER JOIN way_nodes ON nodes.id = way_nodes.node_id WHERE way_nodes.way_id = :wayId', array('wayId' => $way->id))->find_array();

					foreach($nodes as $node) {

						$point = json_decode($node['geometry']);
						array_push($coordinates, $point->coordinates);
					}

					array_push($coordinatesWay, $coordinates);
				}

				$geojson = array(
						"type"=>"Feature",
						"properties"=> $properties,
						"geometry"=>array("type"=>"MultiPolygon", "coordinates"=>array($coordinatesWay))
				);

				$relation->geojson = json_encode($geojson);
				$relationArray = $relation->as_array();

				array_push($result["pistes"], $relationArray);
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