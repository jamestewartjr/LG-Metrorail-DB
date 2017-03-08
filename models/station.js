const pg = require('pg-promise')()
const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db',
  user: 'JameStewartJr',
}
const db = pg(connection)

const getStationId = (stationName) => {
  if ( typeof stationName !== 'string') {
    return 'Please provide station name.'
  }
  else {
    return db.one('SELECT id FROM stations WHERE name = $1', [stationName])
  }
}

const getStationLocation = (id) => {
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

module.exports = {
  getStationId,
  getStationLocation,
  getWaitingPassengerCount,
  getPreviousTrainStation,
  getNextTrainStation
}
