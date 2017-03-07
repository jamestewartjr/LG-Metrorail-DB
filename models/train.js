const pg = require('pg-promise')()

const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db',
  user: 'postgres',
}

const db = pg(connection)

getTrainId = (station) => {
  let currentStation = 'Waterfront'
  if(typeof station !== 'string') {
    return 'Please insert current train station name.'
  }
  else if(station !== currentStation){
    return 'No train found at that station.'
  }
  else{
    db.query('select id from trains where currentStation = ($1)', station)

  }
}

module.exports = {
  getTrainId
}
