const pg = require('pg-promise')()
const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db'
}
const db = pg(connection)

const getStationIdByName = (stationName) => {
  if ( typeof stationName !== 'string') {
    return 'Please provide station name.'
  }
  else {
    return db.one('SELECT id FROM stations WHERE name = $1', [stationName])
  }
}

const getStationLocationById = (id) => {
  if ( typeof id !== 'number') {
    return 'Please provide a station id.'
  }
  else {
    return db.one('SELECT name FROM stations WHERE id = $1', [id])
  }
}

const getWaitingPassengerCount = (name) => {
  if ( typeof name !== 'string') {
    return 'Please provide a station name.'
  }
  else {
    return db.one('SELECT passengers_waiting FROM stations WHERE name = $1', [name])
  }
}

const getPreviousTrainStation = (name) => {
  if ( typeof name !== 'string') {
    return 'Please provide a station name.'
  }
  else {
    return db.one('SELECT previous_station FROM stations WHERE name = $1', [name])
  }
}

const getNextTrainStation = (name) => {
  if ( typeof name !== 'string') {
    return 'Please provide a station name.'
  }
  else {
    return db.one('SELECT next_station FROM stations WHERE name = $1', [name])
  }
}

const createStation = (name, passengers_waiting, previous_station, next_station) => {
  db.one('INSERT INTO stations( name, passengers_waiting, previous_station, next_station ) VALUES( $1, $2, $3, $4 ) RETURNING *',
  [name, passengers_waiting, previous_station, next_station] )
  return 'Thank you for expanding the transit system.'
}

const updateStationByName = (name, passengers_waiting, previous_station, next_station) => {
  db.one('UPDATE stations SET name = $1 , passengers_waiting = $2,  previous_station = $3, next_station = $4 WHERE name = $1 )',
  [name, passengers_waiting, previous_station, next_station] )
  return 'Thank you for updating the transit system.'
}

const deleteStationByName = (name) => {
  if ( typeof name !== 'string') {
    return 'Please provide a station name.'
  }
  db.none('DELETE FROM stations WHERE stations.name = $1', [name] )
  return 'Thank you for deleting the transit station.'
}

module.exports = {
  getStationIdByName,
  getStationLocationById,
  getWaitingPassengerCount,
  getPreviousTrainStation,
  getNextTrainStation,
  createStation,
  updateStationByName,
  deleteStationByName
}
