<script lang="ts">
	import '../app.postcss';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import Dropdownmenu from '$lib/components/Dropdownmenu.svelte';

	const navigation = [
		{ label: 'Sites', href: '/sites' },
		{ label: 'Charts', href: '/charts' }
	];

	export let menuItems = [
		{ label: 'Account', href: '/account' },
		{ label: 'Create New Location', href: '/newlocation' },
		{ label: 'Upload', href: '/upload' }
	];

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

<svelte:head>
	<title>Texas Dark Sky</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/" class="text-primary-500 text-xl">Dark Sky</a>
			</svelte:fragment>

			{#each navigation as nav}
				<a href={nav.href} class="btn bg-secondary-600 w-36 ml-4">{nav.label}</a>
			{/each}

			<svelte:fragment slot="trail">
				<LightSwitch />
				{#if session}
					<Dropdownmenu nameId={session.user.email} menuItems={menuItems} />
				{:else}
					<a href="/register" class="btn bg-primary-600 w-36">Register</a>
					<a href="/login" class="btn bg-primary-600 w-36">Login</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
