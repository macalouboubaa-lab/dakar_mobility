-- ═══════════════════════════════════════
-- DAKAR MOBILITY — Schéma Base de Données
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT CHECK (role IN ('passenger', 'driver', 'admin')) NOT NULL DEFAULT 'passenger',
  is_verified BOOLEAN DEFAULT false,
  rating DECIMAL(2,1) DEFAULT 5.0,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transport_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  icon TEXT,
  color TEXT,
  avg_speed_kmh INTEGER DEFAULT 25,
  is_active BOOLEAN DEFAULT true,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO transport_types (name, code, icon, color, avg_speed_kmh) VALUES
  ('Car Rapide', 'CAR_RAPIDE', '🚌', '#F59E0B', 20),
  ('Ndiaga Ndiaye', 'NDIAGA_NDIAYE', '🚐', '#10B981', 25),
  ('BRT (Bus Rapid Transit)', 'BRT', '🚎', '#3B82F6', 35),
  ('TER (Train Express)', 'TER', '🚆', '#8B5CF6', 60),
  ('Dakar Dem Dikk', 'DDD', '🚍', '#EF4444', 30),
  ('Taxi Collectif (Boko)', 'TAXI_BOKO', '🚕', '#F97316', 30),
  ('Clando', 'CLANDO', '🚗', '#6B7280', 35),
  ('Tata Bus', 'TATA', '🚌', '#14B8A6', 22),
  ('Cars Blancs-Verts', 'CARS_BV', '🚐', '#22C55E', 25),
  ('VTC Privé', 'VTC', '🚙', '#0EA5E9', 40);

CREATE TABLE IF NOT EXISTS stops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  zone TEXT,
  transport_types TEXT[],
  is_major BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS routes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transport_type_id UUID REFERENCES transport_types(id),
  line_number TEXT,
  name TEXT NOT NULL,
  origin_stop_id UUID REFERENCES stops(id),
  destination_stop_id UUID REFERENCES stops(id),
  price_fcfa INTEGER NOT NULL,
  duration_min INTEGER,
  frequency_min INTEGER,
  operating_hours TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS trip_searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  origin_address TEXT NOT NULL,
  origin_lat DOUBLE PRECISION,
  origin_lng DOUBLE PRECISION,
  destination_address TEXT NOT NULL,
  destination_lat DOUBLE PRECISION,
  destination_lng DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS itineraries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  search_id UUID REFERENCES trip_searches(id),
  total_duration_min INTEGER,
  total_price_fcfa INTEGER,
  nb_correspondances INTEGER DEFAULT 0,
  segments JSONB NOT NULL,
  is_recommended BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  itinerary_id UUID REFERENCES itineraries(id),
  status TEXT CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
  payment_method TEXT CHECK (payment_method IN ('wave', 'orange_money', 'cash')) NOT NULL,
  payment_status TEXT CHECK (payment_status IN ('pending', 'success', 'failed')) DEFAULT 'pending',
  total_paid_fcfa INTEGER,
  booking_ref TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  plan_name TEXT NOT NULL,
  route_id UUID REFERENCES routes(id),
  price_fcfa INTEGER NOT NULL,
  nb_trips_included INTEGER,
  nb_trips_used INTEGER DEFAULT 0,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  booking_id UUID REFERENCES bookings(id),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  transport_type_id UUID REFERENCES transport_types(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS drivers (
  id UUID PRIMARY KEY REFERENCES users(id),
  transport_type_id UUID REFERENCES transport_types(id),
  vehicle_description TEXT,
  license_number TEXT UNIQUE,
  is_verified BOOLEAN DEFAULT false,
  current_lat DOUBLE PRECISION,
  current_lng DOUBLE PRECISION,
  is_online BOOLEAN DEFAULT false,
  total_earnings_fcfa INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_own_data" ON users FOR ALL USING (auth.uid() = id);
CREATE POLICY "users_own_bookings" ON bookings FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "users_own_searches" ON trip_searches FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "public_stops" ON stops FOR SELECT USING (true);
CREATE POLICY "public_routes" ON routes FOR SELECT USING (true);
CREATE POLICY "public_transport_types" ON transport_types FOR SELECT USING (true);
