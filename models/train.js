const pg = require('pg-promise')()

const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db',
  user: 'jhallman5',
}

const db = pg(connection)

const getTrainId = (station) => {
  if (typeof station !== 'string') {
    return 'Please insert current train station name.'
  }
  return db.one('SELECT id FROM trains WHERE current_station = $1', [station])
    .then( response => {
      return response
    })
    .catch( error => {
      return error
    })
}

const getTrainCapacityById = (id) => {
  if (typeof id !== 'number') {
    return "Please provide a train ID as an integer."
  }
  return db.one('SELECT capacity FROM trains WHERE id = $1', [id])
    .catch(error => {
      return error
    })
}

const getPassengerCountById = (id) => {
  if (typeof id !== 'number') {
    return "Please provide a train Id as an integer."
  }
  return db.one('SELECT current_riders FROM trains WHERE id = $1', [id])
    .catch( error => {
      return error
    })
}

module.exports = {
  getTrainId,
  getTrainCapacityById,
  getPassengerCountById

}
