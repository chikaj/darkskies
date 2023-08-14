<script lang="ts">
	export let data;
	$: session = data.session;
</script>

<main class="flex flex-col h-full p-10">
	<div class="m-auto flex flex-col">
		<h3 class="m-auto text-4xl text-primary-700">Visualize the</h3>
		<h1 class="m-auto text-8xl text-primary-700">Dark Sky</h1>
	</div>
	<div class="m-auto flex p-10 justify-center">
		{#if session}
			<a href="/upload" class="btn bg-primary-600 w-36">Upload</a>
		{:else}
			<a href="/login" class="btn bg-primary-600 w-36">Login</a>
		{/if}
		<a href="/map" class="btn bg-secondary-600 w-36 ml-4">Map</a>
		<a href="/chart" class="btn bg-tertiary-600 w-36 ml-4">Chart</a>
	</div>
</main>
