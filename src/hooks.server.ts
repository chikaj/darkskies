import { ENV } from "$lib/server/env";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    // console.log("In +hooks.server.ts...BEFORE resolving the event, event looks like:");
    // // console.log(event);
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: ENV.PUBLIC_SUPABASE_URL,
        supabaseKey: ENV.PUBLIC_SUPABASE_ANON_KEY,
        event,
    });

    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    // console.log("Then, AFTER manipulating the event (and just BEFORE resolving it), it looks like:")
    // // console.log(event);

    const response = await resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === "content-range";
        },
    });

    // console.log("The response AFTER the event is resolved and BEFORE further manipulation is...");
    // // console.log(response);

    // response.headers.set("Set-Cookie", "my-cookie=my-cookie-value");

    // console.log("The response as altered AFTER being resolved/manipulated and BEFORE being returned to client (browser) is...");
    // console.log(response.headers);

    return response;

    // return resolve(event, {
    //     filterSerializedResponseHeaders(name) {
    //         return name === "content-range";
    //     },
    // });
};