#!/bin/sh

n=`ps -ef | grep -v grep | grep /home/ubuntu/skime/osm/ | wc -l`
if [ $n -le 0 ]
then
	if [ -s /home/ubuntu/skime/osm/planet/pistes-new.osm.pbf ]
	then
		mv /home/ubuntu/skime/osm/planet/pistes-new.osm.pbf ~/skime/osm/planet/pistes.osm.pbf
	fi

	if [ -s /home/ubuntu/skime/osm/planet/lifts-new.osm.pbf ]
	then
		mv /home/ubuntu/skime/osm/planet/lifts-new.osm.pbf ~/skime/osm/planet/lifts.osm.pbf
	fi

	if [ -s /home/ubuntu/skime/osm/planet/pistesWays-new.osm.pbf ]
	then
		mv /home/ubuntu/skime/osm/planet/pistesWays-new.osm.pbf ~/skime/osm/planet/pistesWays.osm.pbf
	fi

	if [ -s /home/ubuntu/skime/osm/planet/pistesRelations-new.osm.pbf ]
	then
		mv /home/ubuntu/skime/osm/planet/pistesRelations-new.osm.pbf ~/skime/osm/planet/pistesRelations.osm.pbf
	fi
	
	/home/ubuntu/skime/osm/osmosis/bin/osmosis --rri workingDirectory=/home/ubuntu/skime/osm/planet/replication/ --simc --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesWays.osm.pbf --ac --tf accept-ways piste:type=* --tf reject-relations --used-node --sort --write-pbf /home/ubuntu/skime/osm/planet/pistesWays-new.osm.pbf

	/home/ubuntu/skime/osm/osmosis/bin/osmosis --rri workingDirectory=/home/ubuntu/skime/osm/planet/replication/ --simc --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesRelations.osm.pbf --ac --tf accept-relations piste:type=* --used-way --used-node --sort --write-pbf /home/ubuntu/skime/osm/planet/pistesRelations-new.osm.pbf

	/home/ubuntu/skime/osm/osmosis/bin/osmosis --rri workingDirectory=/home/ubuntu/skime/osm/planet/replication/ --simc --read-pbf-fast /home/ubuntu/skime/osm/planet/lifts.osm.pbf --ac --tf accept-ways aerialway=* --tf reject-relations --used-node --sort --write-pbf /home/ubuntu/skime/osm/planet/lifts-new.osm.pbf	
	
	/home/ubuntu/skime/osm/osmosis/bin/osmosis --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesWays-new.osm.pbf --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesRelations-new.osm.pbf --merge --write-pbf /home/ubuntu/skime/osm/planet/pistes-new.osm.pbf

	/home/ubuntu/skime/osm/osmosis/bin/osmosis --read-pbf-fast /home/ubuntu/skime/osm/planet/pistes-new.osm.pbf --read-pbf-fast /home/ubuntu/skime/osm/planet/lifts-new.osm.pbf --merge --write-pbf /home/ubuntu/skime/osm/planet/pistesLifts-new.osm.pbf

	/home/ubuntu/skime/osm/osmosis/bin/osmosis --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesLifts-new.osm.pbf --read-pbf-fast /home/ubuntu/skime/osm/planet/pistesLifts.osm.pbf --dc --write-pgsql-change database=skime_osmdata user=skime password=root
	
	echo "Daily update successful: $(date)" >> /home/ubuntu/skime/osm/planet/replication/script.log
fi

