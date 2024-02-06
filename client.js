
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rawxzrkytuvpeftfghsj.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhd3h6cmt5dHV2cGVmdGZnaHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMzM1NjgsImV4cCI6MjAyMjcwOTU2OH0.7B8SdMaCdiG9_LaUB3zrA7lmza6k5I-jaHQeMZ2ZPmg';
export const supabase = createClient(supabaseUrl, supabaseKey);