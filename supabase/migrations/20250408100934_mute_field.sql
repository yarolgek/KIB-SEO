/*
  # Create newsletter_subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `email` (text, unique, not null)
      - `active` (boolean, default true)

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for anonymous users to insert subscriptions
    - Add policy for authenticated users to read all subscriptions
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL,
  active boolean DEFAULT true
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert subscriptions
CREATE POLICY "Anonymous users can insert subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all subscriptions
CREATE POLICY "Authenticated users can read all subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);