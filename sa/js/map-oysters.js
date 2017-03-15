// Map
var markers = [];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 1.00, lng: 1.0},
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
			['<h3>Ostra 1</h3>','<p></p>', 'oysters', -41.9, 66.802, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 2</h3>','<p></p>', 'oysters', -50.0, 61.792, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 3</h3>','<p></p>', 'oysters', -49.2, 58.848, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 4</h3>','<p></p>', 'oysters', -51.4, 52.300, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 5</h3>','<p></p>', 'oysters', -52.5, 29.800, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 6</h3>','<p></p>', 'oysters', -44.4, 21.846, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 7</h3>','<p></p>', 'oysters', -38.3, 16.396, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 8</h3>','<p></p>', 'oysters', -40.6, 3.3890, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 9</h3>','<p></p>', 'oysters', -33.9, 16.352, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 10</h3>','<p></p>', 'oysters', -26.0, 44.346, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 11</h3>','<p></p>', 'oysters', -18.0, 28.525, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 12</h3>','<p></p>', 'oysters', -2.85, 46.982, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 13</h3>','<p></p>', 'oysters', 5.263, 48.916, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 14</h3>','<p></p>', 'oysters', 11.30, 62.187, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 15</h3>','<p></p>', 'oysters', -5.79, 11.167, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 16</h3>','<p></p>', 'oysters', -11.9, 0.9720, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 17</h3>','<p></p>', 'oysters', -19.8, -1.752, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 18</h3>','<p></p>', 'oysters', -22.3, 1.6312, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 19</h3>','<p></p>', 'oysters', -28.0, 1.1478, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 20</h3>','<p></p>', 'oysters', -35.2, -4.257, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 21</h3>','<p></p>', 'oysters', -53.9, -24.60, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 22</h3>','<p></p>', 'oysters', -50.9, -26.62, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 23</h3>','<p></p>', 'oysters', -34.3, -37.34, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 24</h3>','<p></p>', 'oysters', -22.9, -64.81, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 25</h3>','<p></p>', 'oysters', -10.1, -61.03, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 26</h3>','<p></p>', 'oysters', -0.13, -36.55, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 27</h3>','<p></p>', 'oysters', 10.78, -22.80, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 28</h3>','<p></p>', 'oysters', 4.519, -17.96, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 29</h3>','<p></p>', 'oysters', 8.665, -30.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 30</h3>','<p></p>', 'oysters', 11.13, -27.94, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 31</h3>','<p></p>', 'oysters', 21.16, -28.38, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 32</h3>','<p></p>', 'oysters', 31.83, -33.08, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 33</h3>','<p></p>', 'oysters', 32.91, -56.68, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 34</h3>','<p></p>', 'oysters', 33.31, -60.19, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 35</h3>','<p></p>', 'oysters', 43.76, -60.19, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 36</h3>','<p></p>', 'oysters', 46.37, -47.41, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 37</h3>','<p></p>', 'oysters', 35.45, -34.14, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 38</h3>','<p></p>', 'oysters', 20.17, -18.67, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 39</h3>','<p></p>', 'oysters', 19.26, -14.36, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 40</h3>','<p></p>', 'oysters', 29.34, -18.58, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 41</h3>','<p></p>', 'oysters', 43.06, -17.48, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 42</h3>','<p></p>', 'oysters', 44.14, -23.94, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 43</h3>','<p></p>', 'oysters', 50.79, -21.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 44</h3>','<p></p>', 'oysters', 54.69, 17.934, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 45</h3>','<p></p>', 'oysters', 39.50, 47.246, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 46</h3>','<p></p>', 'oysters', 35.17, 45.093, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 47</h3>','<p></p>', 'oysters', 33.13, 57.309, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 48</h3>','<p></p>', 'oysters', 25.12, 47.905, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 49</h3>','<p></p>', 'oysters', 47.05, 58.010, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"],
			['<h3>Ostra 50</h3>','<p></p>', 'oysters', 55.71, 67.282, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/4.png"]
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