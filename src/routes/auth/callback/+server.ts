import { redirect } from '@sveltejs/kit';

export const GET = async ( { url, locals: { supabase } } ) => {
    const code = url.searchParams.get('code');

    if (code) {
        await supabase.auth.exchangeCodeForSession(code);
    } else {
        console.log("Too bad. There is no code!");
    }

    throw redirect(303, '/')
}