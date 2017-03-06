DROP TABLE IF EXISTS train;
CREATE TABLE train(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  currentRider INTEGER,
  currentStation VARCHAR(25)
);
