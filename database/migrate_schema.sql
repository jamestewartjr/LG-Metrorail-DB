CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  current_riders INTEGER,
  current_station VARCHAR(25)
);
