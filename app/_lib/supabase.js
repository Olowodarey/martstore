import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
   process.SUPABASE_URL = "https://bilopoagjfscflcmytae.supabase.co",
   process.SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpbG9wb2FnamZzY2ZsY215dGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMjcwMTUsImV4cCI6MjA0ODgwMzAxNX0.xu04ux01QdkkxLSerHV0yZHRTNLIzJ_GwIGjIdzcX30")