<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import ChevronIcon from './icons/ChevronIcon.svelte';

	export let nameId: string = 'User name';
	export let items = [
		{ label: 'account', href: '/account' },
		{ label: 'newsite', href: '/newsite' },
		{ label: 'Upload', href: '/upload' }
	];
	let group: string = 'box';

	function menuOpen(): void {
		drawerStore.open();
	}
</script>

<button class="btn bg-primary-600" on:click={menuOpen}>
	<span>{nameId}</span>
	<ChevronIcon />
    <Drawer>
        <ListBox>
            {#each items as item}
                <ListBox bind:group name="medium" value={item.label}>
                    <a href={item.href}>{item.label}</a>
                </ListBox>
            {/each}
        </ListBox>
    </Drawer>
</button>
