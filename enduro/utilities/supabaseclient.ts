// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { setupURLPolyfill } from "react-native-url-polyfill";

setupURLPolyfill();

export const supaBaseclient = createClient(
  "https://zqicaqerdcpwumssadbz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaWNhcWVyZGNwd3Vtc3NhZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4ODYyMzksImV4cCI6MjAxMDQ2MjIzOX0.l3DaX1Bjwa006VCztAGNb_cvi2F9fWAegZRD6YoZr4o",
  {
    auth: {
      detectSessionInUrl: false,
    //   storage: AsyncStorage,
    },
  }
);
