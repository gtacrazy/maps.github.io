// Map
var markers = [];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.00, lng: 44.00},
		zoom: 3,
		minZoom: 2,
		streetViewControl: false,
		noClear: true,
		backgroundColor: '#688CB0',
		mapTypeControlOptions: {
			mapTypeIds: ['map']
		}
	});
	// START - Tiles
	var gtaMapType = new google.maps.ImageMapType({
		getTileUrl: function(coord, zoom) {
			var normalizedCoord = getNormalizedCoord(coord, zoom);
				if (!normalizedCoord) {
					return null;
				}
			var bound = Math.pow(2, zoom);
				return "http://dl.dropboxusercontent.com/u/69995561/maps/sa/tiles/" + zoom + "_" + normalizedCoord.x + "_" + normalizedCoord.y + ".jpg";
		},
	tileSize: new google.maps.Size(256, 256),
	maxZoom: 6,
	name: 'GTA Crazy Maps'
	});
	map.mapTypes.set('map', gtaMapType);
	map.setMapTypeId('map');
	function getNormalizedCoord(coord, zoom) {
		var y = coord.y;
		var x = coord.x;
		var tileRange = 1 << zoom;
			if (y < 0 || y >= tileRange) {
				return null;
			}
			if (x < 0 || x >= tileRange) {
				 x = (x % tileRange + tileRange) % tileRange;
			}
		return {x: x, y: y};
	}
	// END - Tiles
	// START - Checkbox markers
	var markers = new Array();
		var locations = [
			// Ferraduras
			['<h3>Ferradura 1</h3>','<p></p>', 'horseshoe', 49.64, 22.21, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 2</h3>','<p></p>', 'horseshoe', 50.71, 26.78, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 3</h3>','<p></p>', 'horseshoe', 52.83, 31.87, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 4</h3>','<p></p>', 'horseshoe', 53.46, 39.70, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 5</h3>','<p></p>', 'horseshoe', 53.51, 42.60, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 6</h3>','<p></p>', 'horseshoe', 53.62, 59.12, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 7</h3>','<p></p>', 'horseshoe', 48.95, 64.75, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 8</h3>','<p></p>', 'horseshoe', 47.19, 58.68, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 9</h3>','<p></p>', 'horseshoe', 49.47, 49.45, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 10</h3>','<p></p>', 'horseshoe', 48.25, 48.84, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 11</h3>','<p></p>', 'horseshoe', 47.87, 45.89, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 12</h3>','<p></p>', 'horseshoe', 46.19, 45.15, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 13</h3>','<p></p>', 'horseshoe', 45.77, 46.11, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 14</h3>','<p></p>', 'horseshoe', 44.40, 46.29, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 15</h3>','<p></p>', 'horseshoe', 43.42, 46.16, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 16</h3>','<p></p>', 'horseshoe', 45.83, 42.03, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 17</h3>','<p></p>', 'horseshoe', 44.53, 37.32, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 18</h3>','<p></p>', 'horseshoe', 47.16, 35.65, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 19</h3>','<p></p>', 'horseshoe', 45.89, 31.30, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 20</h3>','<p></p>', 'horseshoe', 42.13, 20.80, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 21</h3>','<p></p>', 'horseshoe', 37.23, 21.81, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 22</h3>','<p></p>', 'horseshoe', 37.86, 31.35, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 23</h3>','<p></p>', 'horseshoe', 35.75, 34.42, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 24</h3>','<p></p>', 'horseshoe', 30.45, 36.05, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 25</h3>','<p></p>', 'horseshoe', 23.36, 24.58, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 26</h3>','<p></p>', 'horseshoe', 22.19, 30.82, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 27</h3>','<p></p>', 'horseshoe', 20.88, 33.37, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 28</h3>','<p></p>', 'horseshoe', 16.64, 34.64, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 29</h3>','<p></p>', 'horseshoe', 14.01, 39.78, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 30</h3>','<p></p>', 'horseshoe', 15.67, 46.55, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 31</h3>','<p></p>', 'horseshoe', 17.23, 47.56, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 32</h3>','<p></p>', 'horseshoe', 21.37, 42.64, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 33</h3>','<p></p>', 'horseshoe', 21.98, 47.43, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 34</h3>','<p></p>', 'horseshoe', 20.22, 56.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 35</h3>','<p></p>', 'horseshoe', 18.90, 64.61, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 36</h3>','<p></p>', 'horseshoe', 24.65, 50.24, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 37</h3>','<p></p>', 'horseshoe', 27.64, 52.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 38</h3>','<p></p>', 'horseshoe', 27.64, 54.37, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 39</h3>','<p></p>', 'horseshoe', 24.57, 56.53, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 40</h3>','<p></p>', 'horseshoe', 32.25, 50.86, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 41</h3>','<p></p>', 'horseshoe', 35.03, 44.79, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 42</h3>','<p></p>', 'horseshoe', 39.23, 47.21, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 43</h3>','<p></p>', 'horseshoe', 37.86, 50.38, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 44</h3>','<p></p>', 'horseshoe', 40.25, 49.94, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 45</h3>','<p></p>', 'horseshoe', 41.11, 53.41, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 46</h3>','<p></p>', 'horseshoe', 39.13, 57.98, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 47</h3>','<p></p>', 'horseshoe', 38.24, 61.10, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 48</h3>','<p></p>', 'horseshoe', 43.52, 54.42, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 49</h3>','<p></p>', 'horseshoe', 45.40, 56.04, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			['<h3>Ferradura 50</h3>','<p></p>', 'horseshoe', 43.99, 59.08, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/2.png"],
			];
	var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {  
			marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][3], locations[i][4]),
			map: map,
			icon: locations[i][6]
		});
		markers.push(marker);
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]+"<br />"+locations[i][1]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
	// shows all markers
	function show() {
		for(var j = 0; j < arguments.length; j++){
		  for (var i=0; i < locations.length; i++) {
			if (locations[i][2] == arguments[j]) {
				markers[i].setVisible(true);
			}
		  }
		}
	}
	// Windows Resize
	$(document).ready(function() {
		google.maps.event.addListener(map, "idle", function(){
			google.maps.event.trigger(map, 'resize'); 
		});
	});
}