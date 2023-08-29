import type { PageServerLoad } from './$types';
import sites from '$lib/data/sites.json';

export const load = (async () => {
    return {
        sites: sites,
    };
}) satisfies PageServerLoad;