import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bggwrzvsjdojenhwisgn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZ3dyenZzamRvamVuaHdpc2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxNzc3MzksImV4cCI6MjAwNTc1MzczOX0.-upT0geAK2QoqCUwZW-7byW4PWtcQdfnNaCRi0nrC9Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
