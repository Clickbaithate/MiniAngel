const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

if (!url || !key) {
  console.error("Error: Supabase URL or Key is missing!");
  return null;
}

const supabase = createClient(url, key);

module.exports = supabase;
