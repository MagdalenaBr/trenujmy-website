import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABSE_URL as string,
  process.env.SUPABASE_KEY as string,
);
