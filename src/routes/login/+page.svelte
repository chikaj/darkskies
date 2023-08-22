<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	export let data: PageData;
	const { form, errors, enhance } = superForm(data.form);
</script>


<div class="flex flex-col w-1/2 m-auto mt-10">
	<form method="POST" use:enhance>
		<label class="label pb-2" for="email">
			<span>Email</span>
			<input class="input" type="text" name="email" bind:value={$form.email} />
			{#if $errors.email}
				<span>{$errors.email}</span>
			{/if}
		</label>
		<label class="label pb-2" for="password">
			<span>Password</span>
			<input class="input" type="password" name="password" bind:value={$form.password} />
			{#if $errors.password}
				<span>{$errors.password}</span>
			{/if}
		</label>
		<button class="btn variant-filled" type="submit">Login</button>
	</form>
</div>
