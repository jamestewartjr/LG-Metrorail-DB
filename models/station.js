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
module.exports = {
  getStationId,
  getStationLocation
}
