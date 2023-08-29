<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	import MapMarker from '$lib/components/icons/MapMarker.svelte';

	export let data: PageData;

	import 'ol/ol.css';
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import GeoJSON from 'ol/format/GeoJSON';
	import VectorSource from 'ol/source/Vector';
	import { fromLonLat } from 'ol/proj';
	import VectorLayer from 'ol/layer/Vector';
	import Style from 'ol/style/Style';
	import Icon from 'ol/style/Icon';

	let sites = data.sites;

	const features = new GeoJSON().readFeatures(sites, {
		dataProjection: 'EPSG:4326',
		featureProjection: 'EPSG:3857'
	});

	// const iconStyle = new Style({
	// 	image: new Icon({
	// 		anchor: [0.5, 46],
	// 		anchorXUnits: 'fraction',
	// 		anchorYUnits: 'pixels',
	// 		src: '$lib/components/icons/MapMarker.svelte'
	// 	})
	// });

	// for (let i = 0; i < features.length; i ++) {
	// 	features[i].setStyle(iconStyle);
	// }

	const vectorSource = new VectorSource({
		features: features
	});

	const vectorLayer = new VectorLayer({
		source: vectorSource
	});

	onMount(() => {
		new Map({
			target: 'map',
			layers: [
				new TileLayer({
					source: new OSM()
				}),
				vectorLayer
			],
			view: new View({
				center: fromLonLat([-98, 29.9]),
				zoom: 12
				// projection: 'EPSG:3857'
			})
		});
	});
</script>

<div class="h-full flex flex-col justify-stretch">
	<div id="map" class="mt-2 w-full flex-1" />
</div>

<div class="p-10">
	<MapMarker />
</div>

