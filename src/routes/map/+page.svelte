<svelte:head>
	<title>Map</title>
	<meta name="description" content="About this app" />
</svelte:head>
<!-- src/routes/map.svelte -->

<script>
	import { onMount } from "svelte";
	import { Map, View } from "ol";
	import TileLayer from "ol/layer/Tile";
	import OSM from "ol/source/OSM";
	import GeoJSON from "ol/format/GeoJSON";
	import VectorLayer from "ol/layer/Vector";
	import VectorSource from "ol/source/Vector";
  
	let map;
  
	onMount(() => {
	  map = new Map({
		target: "map",
		layers: [
		  new TileLayer({
			source: new OSM(),
		  }),
		],
		view: new View({
		  center: [0, 0],
		  zoom: 2,
		}),
	  });
  
	  // Load GeoJSON data
	  fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
		.then((response) => response.json())
		.then((geojson) => {
		  const vectorSource = new VectorSource({
			features: new GeoJSON().readFeatures(geojson),
		  });
  
		  const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgba(0, 106, 78, 0.75)", // Color #006a4e with opacity 0.75
			// color: "red"
            }),
          }),
        });
  
		  map.addLayer(vectorLayer);
		});
	});
  </script>
  
  <!-- <style>
	#map {
	  width: 100%;
	  height: 100%;
	}
  </style> -->
  <div id="map" class="h-screen w-screen"></div>

  