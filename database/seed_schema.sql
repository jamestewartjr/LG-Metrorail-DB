INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (20, 5, 'Waterfront');

INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (200, 15, 'Downtown');

INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (400, 0, 'Colosseum');

INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (100, 10, 'Annex');

INSERT INTO stations (name, passengers_waiting, previous_station, next_station )
VALUES ('Downtown', 15, null, 'Elm Street');

INSERT INTO stations (name, passengers_waiting, previous_station, next_station )
VALUES ('Elm Street', 0, 'Downtown', 'Forest Gardens');

INSERT INTO stations (name, passengers_waiting, previous_station, next_station )
VALUES ('Forest Gardens', 1, 'Elm Street', 'Annex');

INSERT INTO stations (name, passengers_waiting, previous_station, next_station )
VALUES ('Annex', 5, 'Forest Gardens', '10th Ave');

INSERT INTO stations (name, passengers_waiting, previous_station, next_station )
VALUES ('10th Ave', 20, 'Annex', 'Waterfront');

INSERT INTO passengers (name, ticket, current_station, current_train_id)
  VALUES ('Sam', 'Downtown', 'Waterfront', 1);

INSERT INTO passengers( name, ticket, current_station, current_train_id)
  VALUES ('Lisa', 'Waterfront', 'Downtown', 2);
