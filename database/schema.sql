CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  current_riders INTEGER,
  current_station VARCHAR(25)
);

CREATE TABLE passengers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  ticket VARCHAR(25),
  current_station VARCHAR(25),
  current_train_id INTEGER
);
