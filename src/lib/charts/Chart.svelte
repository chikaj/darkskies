<script lang="ts">
	import { scaleLinear } from 'd3';
    // import * as d3 from 'd3';

	import XAxis from '$lib/charts/XAxis.svelte';
	import YAxis from '$lib/YAxis.svelte';
	import Datapoint from '$lib/Datapoint.svelte';
    import Line from '$lib/Dline.svelte';

	export let data;

	export let xRange: number [];
	export let yRange: number [];

	const padding = 50;

	let width: number;
	let height: number;

	$: xScale = scaleLinear()
		.domain(xRange)
		.range([padding, width - padding]);

	$: yScale = scaleLinear()
		.domain(yRange)
		.range([height - padding, padding]);

	$: renderedData = data.map((d) => {
		return {
			x: xScale(d.x),
			y: yScale(d.y)
		};
	});
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	{#if width && height}
		<svg {width} {height}>
			<XAxis scale={xScale} y={height - padding} />
			<YAxis scale={yScale} x={padding} />
			<Line data={renderedData} />
			{#each renderedData as { x, y }}
				<Datapoint {x} {y} />
			{/each}
		</svg>
	{/if}
</div>

<style>
	.chart {
		flex: 1;
		width: 100%;
		overflow: hidden;
	}

	/* svg {
        background: red;
    } */
</style>
