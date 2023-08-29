import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
    const session = await event.locals.getSession();
    if (!session) {
        throw redirect(302, "/login");
    }
    return {};
}) satisfies PageServerLoad;