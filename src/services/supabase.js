import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vsopvpaerfrbvgagaaho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzb3B2cGFlcmZyYnZnYWdhYWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2Njk5MTUsImV4cCI6MjAzMTI0NTkxNX0.OA46AfOGEJXTXtNKjMkHKpKYAJ-wL3X-YJ77o0udiWw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
