import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";
import { getSupabasePublicEnv } from "@/lib/supabase/env";

/**
 * Browser / Client Component client.
 * `createBrowserClient` is already a singleton — call this from any client component.
 */
export function createClient() {
  const { url, key } = getSupabasePublicEnv();

  return createBrowserClient<Database>(url, key);
}
