INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (20, 5, 'Waterfront');

INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (200, 15, 'Downtown');

INSERT INTO stations (name, passengers_waiting, next_station, previous_station )
VALUES ('Downtown', 15, null, 'Elm Street');

INSERT INTO stations (name, passengers_waiting, next_station, previous_station )
VALUES ('Elm Street', 0, 'Downtown', 'Forest Gardens');

INSERT INTO stations (name, passengers_waiting, next_station, previous_station )
VALUES ('Forest Gardens', 1, 'Elm Street', 'Annex');

INSERT INTO stations (name, passengers_waiting, next_station, previous_station )
VALUES ('Annex', 5, 'Forest Gardens', '10th Ave');

INSERT INTO stations (name, passengers_waiting, next_station, previous_station )
VALUES ('10th Ave', 20, 'Waterfront', 'Colosseum');
