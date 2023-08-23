import { setError, superValidate } from 'sveltekit-superforms/client';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { loginUserSchema } from '$lib/schemas';

export const load: PageServerLoad = async (evemt) => {
    return {
        form: superValidate(loginUserSchema)
    };
};