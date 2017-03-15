// Map
var markers = [];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 5.394, lng: -47.76},
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
			// Fotografia
			['<h3>Fotografia 1</h3>','<p></p>', 'snapshot', -8.01, -21.65, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 2</h3>','<p></p>', 'snapshot', -12.7, -39.32, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 3</h3>','<p></p>', 'snapshot', -4.52, -25.08, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 4</h3>','<p></p>', 'snapshot', 1.008, -28.33, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 5</h3>','<p></p>', 'snapshot', -16.5, -43.98, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 6</h3>','<p></p>', 'snapshot', -17.8, -46.88, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 7</h3>','<p></p>', 'snapshot', -14.9, -56.81, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 8</h3>','<p></p>', 'snapshot', -24.0, -65.07, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 9</h3>','<p></p>', 'snapshot', -7.66, -61.64, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 10</h3>','<p></p>', 'snapshot', -5.74, -61.82, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 11</h3>','<p></p>', 'snapshot', 0.129, -59.62, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 12</h3>','<p></p>', 'snapshot', -0.48, -57.12, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 13</h3>','<p></p>', 'snapshot', 1.403, -57.95, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 14</h3>','<p></p>', 'snapshot', 0.568, -54.57, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 15</h3>','<p></p>', 'snapshot', -1.32, -52.77, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 16</h3>','<p></p>', 'snapshot', 3.905, -58.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 17</h3>','<p></p>', 'snapshot', 4.650, -51.67, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 18</h3>','<p></p>', 'snapshot', 7.490, -54.22, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 19</h3>','<p></p>', 'snapshot', 8.752, -55.54, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 20</h3>','<p></p>', 'snapshot', 8.317, -62.17, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 21</h3>','<p></p>', 'snapshot', 8.752, -63.23, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 22</h3>','<p></p>', 'snapshot', 17.43, -62.35, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 23</h3>','<p></p>', 'snapshot', 16.80, -55.10, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 24</h3>','<p></p>', 'snapshot', 11.99, -52.94, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 25</h3>','<p></p>', 'snapshot', 12.93, -50.18, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 26</h3>','<p></p>', 'snapshot', 15.91, -50.13, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 27</h3>','<p></p>', 'snapshot', 22.02, -52.68, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 28</h3>','<p></p>', 'snapshot', 33.20, -60.15, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 29</h3>','<p></p>', 'snapshot', 32.91, -56.28, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 30</h3>','<p></p>', 'snapshot', 30.59, -41.56, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 31</h3>','<p></p>', 'snapshot', 29.03, -37.83, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 32</h3>','<p></p>', 'snapshot', 28.64, -36.38, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 33</h3>','<p></p>', 'snapshot', 22.02, -27.63, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 34</h3>','<p></p>', 'snapshot', 20.25, -33.12, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 35</h3>','<p></p>', 'snapshot', 15.15, -34.57, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 36</h3>','<p></p>', 'snapshot', 20.83, -39.67, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 37</h3>','<p></p>', 'snapshot', 23.76, -41.34, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 38</h3>','<p></p>', 'snapshot', 23.36, -46.53, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 39</h3>','<p></p>', 'snapshot', 20.38, -46.31, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 40</h3>','<p></p>', 'snapshot', 19.51, -43.72, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 41</h3>','<p></p>', 'snapshot', 14.85, -43.98, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 42</h3>','<p></p>', 'snapshot', 11.30, -42.84, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 43</h3>','<p></p>', 'snapshot', 10.26, -46.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 44</h3>','<p></p>', 'snapshot', 10.35, -48.81, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 45</h3>','<p></p>', 'snapshot', 5.307, -46.66, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 46</h3>','<p></p>', 'snapshot', 3.116, -43.76, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 47</h3>','<p></p>', 'snapshot', -1.80, -41.47, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 48</h3>','<p></p>', 'snapshot', 1.096, -37.74, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 49</h3>','<p></p>', 'snapshot', 9.316, -37.69, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
			['<h3>Fotografia 50</h3>','<p></p>', 'snapshot', 11.21, -28.99, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/3.png"],
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