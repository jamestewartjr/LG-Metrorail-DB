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

module.exports = {
  getTrainId
}
