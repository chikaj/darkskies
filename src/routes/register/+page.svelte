<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		resetForm: true
	});
</script>

<div class="flex flex-col w-1/3 m-auto mt-10">
	<form method="POST" use:enhance class="space-y-5">
		<label for="full_name" class="label">
			<span>Full Name</span>
			<input type="text" name="full_name" class="input" bind:value={$form.full_name} />
            {#if $errors.full_name}
                <span class="block text-red-600 dark:text-red-500">{$errors.full_name}</span>
            {/if}
		</label>
		<label class="label" for="email">
			<span>Email</span>
			<input class="input" type="text" name="email" bind:value={$form.email} />
            {#if $errors.email}
                <span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
            {/if}
		</label>
		<label class="label" for="password">
			<span>Password</span>
			<input class="input" type="password" name="password" bind:value={$form.password} />
            {#if $errors.password}
                <span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
            {/if}
		</label>
		<label for="passwordConfirm" class="label">
			<span>Confirm Password</span>
			<input
				type="password"
				name="passwordConfirm"
				class="input"
				bind:value={$form.passwordConfirm}
			/>
            {#if $errors.passwordConfirm}
                <span class="block text-red-600 dark:text-red-500">{$errors.passwordConfirm}</span>
            {/if}
		</label>
		<button class="btn variant-filled w-28" type="submit">Register</button>
	</form>
</div>
