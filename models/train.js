const { db } = require('../database/config/connection.js')

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

const getTrainCurrentStationById = (id) => {
  if (typeof id !== 'number') {
    return "Please provide a train Id as an integer."
  }
  return db.one('SELECT current_station FROM trains WHERE id = $1', [id])
    .catch( error => {
      return error
    })
}

// const getTrainNextStationById = (id) => {
//   if (typeof id !== 'number') {
//     return "Please provide a train Id as an integer."
//   }
//   return db.one('SELECT previous_station FROM trains WHERE id = $1', [id])
//     .catch( error => {
//       return error
//     })
// }

const createTrain = (capacity, current_riders, current_station) => {
  if (current_riders > capacity) {
    return 'Sorry, train at capacity.'
  }
  db.none('INSERT INTO trains(capacity, current_riders, current_station) VALUES ($1, $2, $3)', [capacity, current_riders, current_station])
  return 'Thank you for increasing the speed of our metrorail!'
}

const destroyTrain = (id) => {
  if (typeof id !== 'number') {
    return "Please provide a train Id as an integer."
  }
  db.none('DELETE FROM trains WHERE id = $1', [id])
  return 'Out with the old.'
}

module.exports = {
  db,
  getTrainId,
  getTrainCapacityById,
  getPassengerCountById,
  getTrainCurrentStationById,
  createTrain,
  destroyTrain
}
