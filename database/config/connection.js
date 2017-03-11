const pg = require('pg-promise')()

const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db',
}

const db = pg(connection)

module.exports = { db }
