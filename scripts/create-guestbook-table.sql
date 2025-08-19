-- Create guestbook table for storing visitor messages
CREATE TABLE IF NOT EXISTS guestbook (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some sample data
INSERT INTO guestbook (name, message, created_at) VALUES
('alex', 'love the clean design! really inspiring work.', NOW() - INTERVAL '2 days'),
('sarah', 'your projects look amazing. would love to collaborate sometime!', NOW() - INTERVAL '1 week')
ON CONFLICT DO NOTHING;
