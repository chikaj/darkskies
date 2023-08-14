<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import XYZ from 'ol/source/XYZ';
	import { fromLonLat } from 'ol/proj';

	onMount(() => {
		new Map({
			target: 'map',
			layers: [
				new TileLayer({
					source: new XYZ({
						url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
					})
				})
			],
			view: new View({
				center: fromLonLat([-98, 29.9]),
				zoom: 12
			})
		});
	});

	export let data: PageData;
</script>

<div class="h-full flex flex-col justify-stretch">
	<h1 class="text-6xl text-secondary-600 text-center pt-5">Map visualization</h1>

	<div id="map" class="mt-2 w-full flex-1" />
</div>
