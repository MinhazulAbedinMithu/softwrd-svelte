<svelte:head>
	<title>Map</title>
	<meta name="description" content="About this app" />
</svelte:head>
<!-- src/routes/map.svelte -->
<script>
	import { onMount } from 'svelte';
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import GeoJSON from 'ol/format/GeoJSON';
	import Style from 'ol/style/Style';
	import Fill from 'ol/style/Fill';
	import Stroke from 'ol/style/Stroke';
	import Circle from 'ol/style/Circle';
	// import geojsonData from "./countries.geojson"
  
	// Replace this with your GeoJSON data
	const geojson = {
	  type: 'FeatureCollection',
	  features: [
		{
		  type: 'Feature',
		  geometry: {
			type: 'Point',
			coordinates: [0, 0],
		  },
		  properties: {
			name: 'Sample Point',
		  },
		},
		// Add more features as needed
	  ],
	};
  
	let map;
  
	const redFill = new Fill({
	  color: 'red',
	});
  
	const style = new Style({
	  fill: redFill,
	  stroke: new Stroke({
		color: 'black', // You can change the outline color here
		width: 2,
	  }),
	  image: new Circle({
		radius: 6,
		fill: redFill,
		stroke: new Stroke({
		  color: 'black', // You can change the outline color here
		  width: 2,
		}),
	  }),
	});

	// console.log(geojsonData);
  
	onMount(async () => {
    // Fetch the GeoJSON data from the file
    // const response = await fetch('./countries.geojson');
    // const geojsonData = await response.json();
	// console.log({response, geojsonData});
	  map = new Map({
		target: 'map-container',
		layers: [
		//   new TileLayer({
		// 	source: new OSM(),
		//   }),
		//   new VectorLayer({
		// 	source: new VectorSource({
		// 	  features: new GeoJSON().readFeatures(geojson),
		// 	}),
		// 	style: style, // Apply the custom style to the features
		//   }),
		new VectorLayer({
  background: '#1a2b39',
  source: new VectorSource({
    // url: 'https://openlayers.org/data/vector/ecoregions.json',
	url: 'https://github.com/datasets/geo-countries/blob/master/data/countries.geojson',
    format: new GeoJSON(),
  }),
  style: {
    'fill-color': ['string', ['get', 'COLOR'], '#eee'],
  },
})
		],
		view: new View({
		  center: [0, 0],
		  zoom: 2,
		}),
	  });
	});
  </script>
  
  <style>
	#map-container {
	  width: 100%;
	  height: 100vh;
	}
  </style>
  
  <div id="map-container"></div>
  