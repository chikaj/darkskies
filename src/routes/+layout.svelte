<script lang="ts">
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import type { LayoutData } from './$types';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	export let data: LayoutData;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => subscription.unsubscribe();
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="text-primary-500 text-xl">Dark Sky</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if session}
					<a href="/upload" class="btn bg-primary-600 w-36">Upload</a>
				{:else}
					<a href="/login" class="btn bg-primary-600 w-36">Login</a>
				{/if}
				<a href="/map" class="btn bg-secondary-600 w-36 ml-4">Map</a>
				<a href="/chart" class="btn bg-tertiary-600 w-36 ml-4">Chart</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
