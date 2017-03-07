DROP TABLE IF EXISTS trains;

CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  currentRiders INTEGER,
  currentStation VARCHAR(25)
);

INSERT INTO trains (capacity, currentRiders, currentStation)
  VALUES (20, 5, 'Waterfront');

INSERT INTO trains (capacity, currentRiders, currentStation)
  VALUES (20, 15, 'Downtown');
