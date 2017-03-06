getTrainId = (station) => {
console.log('station type inside of function', typeof station)
  let currentStation = 'Waterfront'
  if(typeof station !== String) {
    console.log('inside typeof string');
    return 'Please insert current train station name.'
  }

  else if(station !== currentStation){
    console.log('inside not equal stations');
    return 'No train found at that station.'
    }
}

module.exports = {
  getTrainId
}
