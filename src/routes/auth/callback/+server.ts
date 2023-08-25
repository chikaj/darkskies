import { redirect } from '@sveltejs/kit';

export const GET =async ({url, locals: { supabase }}) => {
    console.log("In the callback!")
    const code = url.searchParams.get('code');

    if (code) {
        await supabase.auth.exchangeCodeForSession(code);
    }

    throw redirect(303, '/')
}