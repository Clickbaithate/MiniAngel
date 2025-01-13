import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export let supabase

try {
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("Supabase URL or Anon Key is missing!");
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} catch (error) {
  console.error("Error initializing Supabase client:", error.message)
  supabase = null
}

