// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Database } from "$lib/supabase-types.ts";
import type { Session, SupabaseClient } from "@supabase/supabase-js";

// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {};
