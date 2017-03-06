DROP TABLE IF EXIST train;
CREATE TABLE train(
  id SERIAL PRIMARY KEY,
  capacity INTEGER,
  currentRider INTEGER,
  currentStation VARCHAR(25)
);
