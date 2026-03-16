import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  company_name: string;
  phone_number: string;
  service: string;
  problems: string;
  found_us: string;
  additional_info?: string;
};

export type NewsletterSubscription = {
  id?: string;
  created_at?: string;
  email: string;
  active?: boolean;
};