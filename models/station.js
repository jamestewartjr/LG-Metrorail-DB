const pg = require('pg-promise')()
const connection =  {
  host: 'localhost',
  port: 5432,
  database: 'lg-metrorail-db',
  user: 'jhallman5',
}
const db = pg(connection)

module.exports = {


}
