import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/types/database";
import { readSupabasePublicEnv } from "@/lib/supabase/env";

/**
 * Refresh the Auth token on every matched request and persist cookies
 * on both the request (for Server Components) and the response (for the browser).
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  const env = readSupabasePublicEnv();

  if (!env) {
    return supabaseResponse;
  }

  const { url, key } = env;

  const supabase = createServerClient<Database>(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        supabaseResponse = NextResponse.next({ request });

        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });

        if (headers) {
          Object.entries(headers).forEach(([headerName, headerValue]) => {
            if (typeof headerValue === "string") {
              supabaseResponse.headers.set(headerName, headerValue);
            }
          });
        }
      },
    },
  });

  // Validate the JWT. Do not insert logic between createServerClient and this call —
  // it can cause random logouts if the session refresh is skipped.
  await supabase.auth.getClaims();

  return supabaseResponse;
}
