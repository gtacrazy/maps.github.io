// Map
var markers = [];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -41.0, lng: 45.00},
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
			// Pichações
			['<h3>Pichação 01</h3>','<p></p>', 'tagsmap', -34.8, 47.246, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 02</h3>','<p></p>', 'tagsmap', -36.40, 46.43, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 03</h3>','<p></p>', 'tagsmap', -34.65, 45.90, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 04</h3>','<p></p>', 'tagsmap', -31.37, 52.84, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 05</h3>','<p></p>', 'tagsmap', -31.49, 53.94, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 06</h3>','<p></p>', 'tagsmap', -32.94, 53.85, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 07</h3>','<p></p>', 'tagsmap', -35.30, 54.38, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 08</h3>','<p></p>', 'tagsmap', -35.73, 50.95, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 09</h3>','<p></p>', 'tagsmap', -33.38, 46.52, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 10</h3>','<p></p>', 'tagsmap', -33.56, 43.97, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 11</h3>','<p></p>', 'tagsmap', -34.33, 40.32, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 12</h3>','<p></p>', 'tagsmap', -34.65, 41.24, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 13</h3>','<p></p>', 'tagsmap', -35.77, 40.58, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 14</h3>','<p></p>', 'tagsmap', -36.55, 39.26, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 15</h3>','<p></p>', 'tagsmap', -37.67, 41.29, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 16</h3>','<p></p>', 'tagsmap', -36.86, 43.57, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 17</h3>','<p></p>', 'tagsmap', -37.67, 45.72, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 18</h3>','<p></p>', 'tagsmap', -37.39, 48.71, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 19</h3>','<p></p>', 'tagsmap', -39.28, 46.25, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 20</h3>','<p></p>', 'tagsmap', -38.91, 41.73, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 21</h3>','<p></p>', 'tagsmap', -40.53, 42.65, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 22</h3>','<p></p>', 'tagsmap', -41.59, 43.92, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 23</h3>','<p></p>', 'tagsmap', -42.54, 41.24, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 24</h3>','<p></p>', 'tagsmap', -43.69, 39.92, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 25</h3>','<p></p>', 'tagsmap', -43.37, 43.44, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 26</h3>','<p></p>', 'tagsmap', -43.88, 48.84, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 27</h3>','<p></p>', 'tagsmap', -41.06, 48.23, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 28</h3>','<p></p>', 'tagsmap', -45.35, 51.13, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 29</h3>','<p></p>', 'tagsmap', -43.85, 53.33, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 30</h3>','<p></p>', 'tagsmap', -50.05, 51.22, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 31</h3>','<p></p>', 'tagsmap', -51.74, 35.40, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 32</h3>','<p></p>', 'tagsmap', -45.91, 36.41, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 33</h3>','<p></p>', 'tagsmap', -41.20, 25.25, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 34</h3>','<p></p>', 'tagsmap', -38.87, 24.02, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 35</h3>','<p></p>', 'tagsmap', -37.70, 18.21, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 36</h3>','<p></p>', 'tagsmap', -36.58, 10.61, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 37</h3>','<p></p>', 'tagsmap', -42.28, 8.590, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 38</h3>','<p></p>', 'tagsmap', -32.31, 13.07, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 39</h3>','<p></p>', 'tagsmap', -31.75, 16.59, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 40</h3>','<p></p>', 'tagsmap', -31.41, 21.47, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 41</h3>','<p></p>', 'tagsmap', -27.47, 10.92, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 42</h3>','<p></p>', 'tagsmap', -21.88, 21.16, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 43</h3>','<p></p>', 'tagsmap', -22.45, 24.19, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 44</h3>','<p></p>', 'tagsmap', -25.39, 27.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 45</h3>','<p></p>', 'tagsmap', -28.05, 24.54, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 46</h3>','<p></p>', 'tagsmap', -31.34, 28.59, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 47</h3>','<p></p>', 'tagsmap', -34.83, 28.45, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 48</h3>','<p></p>', 'tagsmap', -36.30, 30.04, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 49</h3>','<p></p>', 'tagsmap', -36.65, 33.82, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 50</h3>','<p></p>', 'tagsmap', -36.09, 34.83, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 51</h3>','<p></p>', 'tagsmap', -29.29, 39.09, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 52</h3>','<p></p>', 'tagsmap', -27.16, 37.95, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 53</h3>','<p></p>', 'tagsmap', -25.74, 33.73, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 54</h3>','<p></p>', 'tagsmap', -22.01, 34.17, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 55</h3>','<p></p>', 'tagsmap', -21.19, 39.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 56</h3>','<p></p>', 'tagsmap', -23.46, 42.74, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 57</h3>','<p></p>', 'tagsmap', -21.80, 46.08, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 58</h3>','<p></p>', 'tagsmap', -23.06, 47.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 59</h3>','<p></p>', 'tagsmap', -23.38, 48.19, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 60</h3>','<p></p>', 'tagsmap', -22.09, 50.21, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 61</h3>','<p></p>', 'tagsmap', -24.59, 51.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 62</h3>','<p></p>', 'tagsmap', -26.10, 49.90, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 63</h3>','<p></p>', 'tagsmap', -26.10, 47.70, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 64</h3>','<p></p>', 'tagsmap', -25.58, 44.23, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 65</h3>','<p></p>', 'tagsmap', -28.17, 44.23, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 66</h3>','<p></p>', 'tagsmap', -29.21, 44.36, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 67</h3>','<p></p>', 'tagsmap', -30.51, 47.00, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 68</h3>','<p></p>', 'tagsmap', -31.49, 48.49, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 69</h3>','<p></p>', 'tagsmap', -29.48, 49.68, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 70</h3>','<p></p>', 'tagsmap', -27.43, 47.92, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 71</h3>','<p></p>', 'tagsmap', -27.20, 52.01, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 72</h3>','<p></p>', 'tagsmap', -29.17, 52.62, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 73</h3>','<p></p>', 'tagsmap', -32.86, 55.52, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 74</h3>','<p></p>', 'tagsmap', -31.34, 56.71, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 75</h3>','<p></p>', 'tagsmap', -29.48, 57.11, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 76</h3>','<p></p>', 'tagsmap', -29.25, 57.02, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 77</h3>','<p></p>', 'tagsmap', -27.59, 58.03, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 78</h3>','<p></p>', 'tagsmap', -27.04, 58.82, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 79</h3>','<p></p>', 'tagsmap', -25.15, 57.85, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 80</h3>','<p></p>', 'tagsmap', -23.59, 58.78, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 81</h3>','<p></p>', 'tagsmap', -24.27, 63.26, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 82</h3>','<p></p>', 'tagsmap', -26.02, 63.52, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 83</h3>','<p></p>', 'tagsmap', -26.41, 62.16, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 84</h3>','<p></p>', 'tagsmap', -28.13, 64.14, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 85</h3>','<p></p>', 'tagsmap', -31.71, 63.13, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 86</h3>','<p></p>', 'tagsmap', -30.05, 61.76, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 87</h3>','<p></p>', 'tagsmap', -31.52, 59.96, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 88</h3>','<p></p>', 'tagsmap', -30.09, 58.56, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 89</h3>','<p></p>', 'tagsmap', -34.22, 62.29, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 90</h3>','<p></p>', 'tagsmap', -38.05, 62.29, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 91</h3>','<p></p>', 'tagsmap', -39.28, 64.01, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 92</h3>','<p></p>', 'tagsmap', -39.42, 62.64, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 93</h3>','<p></p>', 'tagsmap', -40.10, 62.86, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 94</h3>','<p></p>', 'tagsmap', -41.53, 62.07, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 95</h3>','<p></p>', 'tagsmap', -40.36, 60.89, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 96</h3>','<p></p>', 'tagsmap', -40.26, 55.88, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 97</h3>','<p></p>', 'tagsmap', -39.66, 53.81, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 98</h3>','<p></p>', 'tagsmap', -41.16, 54.73, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 99</h3>','<p></p>', 'tagsmap', -42.18, 58.60, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
			['<h3>Pichação 100</h3>','<p></p>', 'tagsmap', -43.44, 60.89, 4, "http://dl.dropboxusercontent.com/u/69995561/maps/sa/gfx/1.png"],
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
	// #### END Map ####
