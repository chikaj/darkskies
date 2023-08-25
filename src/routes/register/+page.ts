import type { PageLoad } from './$types';

export const load: PageLoad = (async ({data}) => {
    return {
        form: data.form
    };
}) satisfies PageLoad;