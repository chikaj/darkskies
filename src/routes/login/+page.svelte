<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	export let data: PageData;
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="flex flex-col w-1/3 m-auto mt-10">
	<form method="POST" use:enhance class="space-y-5">
		<label class="label" for="email">
			<span>Email</span>
			<input class="input" type="text" name="email" bind:value={$form.email} />
			{#if $errors.email}
				<span>{$errors.email}</span>
			{/if}
		</label>
		<label class="label" for="password">
			<span>Password</span>
			<input class="input" type="password" name="password" bind:value={$form.password} />
			{#if $errors.password}
				<span>{$errors.password}</span>
			{/if}
		</label>
		<button class="btn variant-filled w-28" type="submit">
			Login
		</button>
	</form>
</div>
