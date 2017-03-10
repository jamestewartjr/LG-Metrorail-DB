const mocha = require('mocha')
const { expect } = require('chai')
const {
  getTrainId,
  getTrainCapacityById,
  getPassengerCountById,
  getTrainCurrentStationById,
  createTrain,
  destroyTrain
 } = require('../models/train.js')


describe.only('Train Model', () => {

  context('getTrainId()', ()=> {
    it('returns an error if a string is not given' , () => {
      let station = 2
      expect(getTrainId(station)).to.be.equal('Please insert current train station name.')
    })
    it('returns the ID of a train at current station', () => {
      let station = 'Waterfront'
      return getTrainId(station).then(record => {
        expect(record.id).to.equal(1)
      })
    })
  })

  context('getTrainCapacityById()', ()=> {
    it('returns an error if not given an integer', () => {
      let id = 'string'
      return expect(getTrainCapacityById(id)).to.equal("Please provide a train ID as an integer.")
    })
    it('returns train capacity when given train id', () => {
      let id = 2
      return getTrainCapacityById(id).then(record => {
        expect(record.capacity).to.equal(200)
      })
    })
  })

  context('getPassengerCountById', () => {
    it('returns an error if not given an integer', () => {
      let id = "twice"
      expect( getPassengerCountById(id)).to.be.equal("Please provide a train Id as an integer.")
    })
    it('returns passenger count when given train id', () => {
      let id = 2
      return getPassengerCountById(id).then(record => {
        expect(record.current_riders).to.equal(15)
      })
    })
  })

  context('getTrainCurrentStationById', () => {
    it('returns an error if not given an integer', () => {
      let id = "twice"
      expect( getTrainCurrentStationById(id)).to.be.equal("Please provide a train Id as an integer.")
    })
    it('returns current station when given train id', () => {
      let id = 2
      return getTrainCurrentStationById(id).then(record => {
        expect(record.current_station).to.equal('Downtown')
      })
    })
  })

  // context('getTrainNextStationById', () => {
  //   it('returns an error if not given an integer', () => {
  //     let id = "twice"
  //     expect( getTrainNextStationById(id)).to.be.equal("Please provide a train Id as an integer.")
  //   })
  //   it('returns current station when given train id', () => {
  //     let id = 2
  //     return getTrainNextStationById(id).then(record => {
  //       expect(record.current_station).to.equal('Downtown')
  //     })
  //   })
  // })

  // context('moveTrain', () => {
  //
  // })

  context('createTrain()', () => {
    it('returns and error if larger than capacity', () => {
      expect(createTrain(10, 30, 'ffffFail'))
        .to.be.equal('Sorry, train at capacity.')
    })
    it('should create a new train in our database.' , () => {
      expect(createTrain(30, 10, 'Forest Gardens'))
        .to.be.equal('Thank you for increasing the speed of our metrorail!')
    })
  })

  context('destroyTrain', () => {
    it('returns an error if not given an integer', () => {
      let id = "twice"
      expect( destroyTrain(id)).to.be.equal("Please provide a train Id as an integer.")
    })
    it('returns message when train retired', () => {
      let id = 2
        expect(destroyTrain(id)).to.equal('Out with the old.')
    })
  })

})
