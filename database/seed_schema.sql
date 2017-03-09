INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (20, 5, 'Waterfront');

INSERT INTO trains (capacity, current_riders, current_station)
  VALUES (200, 15, 'Downtown');

INSERT INTO passengers (name, ticket, current_station, current_train_id)
  VALUES ('Sam', 'Downtown', 'Waterfront', 1);

INSERT INTO passengers( name, ticket, current_station, current_train_id)
  VALUES ('Lisa', 'Waterfront', 'Downtown', 2);
