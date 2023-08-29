<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	let comboboxValue: string;
	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	import ChevronIcon from './icons/ChevronIcon.svelte';

	export let nameId: string = 'User name';
	export let menuItems = [
		{ label: 'Page 1', href: '/page1' },
		{ label: 'Page 2', href: '/page2' },
	];
	let group: string = 'box';
</script>

<button class="btn bg-primary-600 justify-between" use:popup={popupCombobox}>
	<span>{nameId}</span>
	<ChevronIcon />
</button>


<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		{#each menuItems as item}
			<ListBoxItem bind:group name="medium" value={item.label}>
				<a href={item.href}>{item.label}</a>
			</ListBoxItem>
		{/each}
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>

					
