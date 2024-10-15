import { IS_BROWSER } from "$fresh/runtime.ts";
import * as supabase from "@supabase/supabase-js";

// These SUPABASE environment variables are the same as in supabase.ts. That way we prevent the browser from recieving unnecessary JS from the server.

const SUPABASE_LIVE_ENDPOINT_ENV_VAR = "SUPABASE_LIVE_ENDPOINT";
const SUPABASE_LIVE_ANON_KEY_ENV_VAR = "SUPABASE_LIVE_ANON_KEY";
const DEFAULT_SUPABASE_LIVE_ENDPOINT =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co";
// From supabase docs:
// "This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies."
export const SUPABASE_LIVE_ENDPOINT = typeof Deno !== "undefined"
  ? Deno.env.get(SUPABASE_LIVE_ENDPOINT_ENV_VAR) ??
    DEFAULT_SUPABASE_LIVE_ENDPOINT
  : DEFAULT_SUPABASE_LIVE_ENDPOINT;

const DEFAULT_SUPABASE_LIVE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96a3NnZG15cnFjeGN3aG5iZXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3MjM3NDYsImV4cCI6MTk3MjI5OTc0Nn0.HMdsG6NZlq6dvYFCK1_tuJh38TmsqLeN8H4OktTHt_M";

export const SUPABASE_LIVE_ANON_KEY = typeof Deno !== "undefined"
  ? Deno.env.get(SUPABASE_LIVE_ANON_KEY_ENV_VAR) ??
    DEFAULT_SUPABASE_LIVE_ANON_KEY
  : DEFAULT_SUPABASE_LIVE_ANON_KEY;

let client: supabase.SupabaseClient;
export const getAllCookies = <T extends Record<string, string>>() =>
  document.cookie.split(";").reduce(
    (ac, str) =>
      Object.assign(ac, { [str.split("=")[0].trim()]: str.split("=")[1] }),
    {} as T,
  );

export function getSupabaseClient(accessToken?: string) {
  if (!client) {
    client = supabase.createClient(
      SUPABASE_LIVE_ENDPOINT,
      accessToken || SUPABASE_LIVE_ANON_KEY,
      {
        auth: { autoRefreshToken: false },
      },
    );
  }
  return client;
}

export async function setSessionFromCookies(client: supabase.SupabaseClient) {
  if (IS_BROWSER) {
    const {
      "deco-access-token": access_token,
      "deco-refresh-token": refresh_token,
    } = getAllCookies<
      { "deco-access-token"?: string; "deco-refresh-token"?: string }
    >();

    if (access_token && refresh_token) {
      return await client.auth.setSession({
        access_token,
        refresh_token,
      });
    }
  }
}
