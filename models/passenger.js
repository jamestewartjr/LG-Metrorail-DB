const { db } = require('../database/connection.js')

const getPassengerIdByName = (name) => {
  if(typeof name !== 'string') {
    return 'Please enter a passenger name.'
  }
  return db.one('SELECT id FROM passengers WHERE name = $1', [name])
    .then( response => {
      return response
    })
    .catch( error => {
      return error
    })
}

const getPassengerNameById = (id) => {
  if(typeof id !== 'number') {
    return 'Please enter the passengers id number.'
  }
  return db.one('SELECT name FROM passengers WHERE id = $1', [id])
    .then( response => {
      return response
    })
    .catch( response => {
      return response
    })
}

const getDesitnationById = (id) => {
  if(typeof id !== 'number'){
    return 'Please enter a passenger id number.'
  }
  return db.one('SELECT ticket FROM passengers WHERE id = $1', [id])
}

const getDesitnationByName  = (name) => {
  if(typeof name !== 'string'){
    return 'Please enter the name of a passenger.'
  }
  return db.one('SELECT ticket FROM passengers WHERE name = $1', [name])
}

const getCurrentStationByPassengerName = (name) => {
  if(typeof name !== 'string') {
    return 'Please enter the name of a passenger to find thier location.'
  }
  return db.one('SELECT current_station FROM passengers WHERE name = $1', [name])
}

const getCurrentStationByPassengerId = (id) => {
  if(typeof id !== 'number') {
    return'Please enter the id of a passenger to find thier location.'
  }
  return db.one('SELECT current_station FROM passengers WHERE id = $1',[id])
}

const getAllPassenersByStationName = (name) => {
  if(typeof name !== 'string') {
    return 'Please enter a station name to find all passengers.'
  }
  return db.one('SELECT name FROM passengers WHERE current_station = $1', [name])
}

const getTrainIdByPassengerId = (id) => {
  if(typeof id !== 'number') {
    return 'Please enter a passenger id to find their train.'
  }
  return db.one('SELECT current_train_id FROM passengers WHERE id = $1', [id])
}

const getTrainIdByPassengerName = (name) => {
  if(typeof name !== 'string') {
    return 'Please enter a passenger name to find their train.'
  }
  return db.one('SELECT current_train_id FROM passengers WHERE name = $1', [name])
}

const getAllPassengersByTrainId = (id) => {
  if(typeof id !== 'number') {
    return 'Please enter a train id to find the passengers aboard.'
  }
  return db.one('SELECT name FROM passengers WHERE current_train_id = $1', [id])
}

const createNewPassenger = (name, destination, currentLocation, currentTrain) => {
  db.one('INSERT INTO passengers( name, ticket, current_station, current_train_id) VALUES ($1, $2, $3, $4)', [name, destination, currentLocation, currentTrain])
  return 'Thank you for joining the metrorail system!'
}
module.exports = {
  getPassengerIdByName,
  getPassengerNameById,
  getDesitnationById,
  getDesitnationByName,
  getCurrentStationByPassengerName,
  getCurrentStationByPassengerId,
  getAllPassenersByStationName,
  getTrainIdByPassengerId,
  getTrainIdByPassengerName,
  getAllPassengersByTrainId,
  createNewPassenger
}
