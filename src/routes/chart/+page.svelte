<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

	import Chart from '$lib/Chart.svelte';
	import Selector from '$lib/Selector.svelte';

	let selectedOption = 'a';

	$: selectedData = data.lists[selectedOption].sort((a, b) => a.x < b.x ? 1 : -1);
</script>

<div class="h-full">
	<h1 class="text-6xl text-tertiary-600 text-center pt-5">Chart visualization</h1>
</div>

<div class="wrapper">
	<Chart 
		data={selectedData}
		xRange={[0, 20]}
		yRange={[0, 16]}
	/>
	<Selector
		options={Object.keys(data)}
		bind:selected={selectedOption}
	/>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>