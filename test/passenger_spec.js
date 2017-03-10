const { expect } = require('chai')
const {
  getPassengerIdByName,
  getPassengerNameById,
  getDesitnationById,
  getDesitnationByName,
  getCurrentStationByPassengerName,
  getCurrentStationByPassengerId,
  getAllPassenersByStationName,
  getTrainIdByPassengerId,
  getTrainIdByPassengerName,
  getAllPassenersByTrainId,
  createNewPassenger
} = require('../models/passenger.js')

describe('Passenger Model' , () => {


  context('getPassengerIdByName()', () => {
    it('returns the passenger id when given a name.', () => {
      let name = 'Lisa'
      return getPassengerIdByName(name).then(result => {
        expect(result.id).to.equal(2)
      })
    })
    it('returns an error message if not given a string.', () => {
      expect(getPassengerIdByName(2)).to.equal('Please enter a passenger name.')
    })
  })

  context('getPassengerNameById()', () => {
    it('returns and error message if given a string', () => {
      expect(getPassengerNameById('Lisa')).to.equal('Please enter the passengers id number.')
    })
    it('return the name of a passenger when given an id.', () => {
      return getPassengerNameById(2).then( results => {
        expect(results.name).to.equal('Lisa')
      })
    })
  })

  context('getDesitnationById()', () => {
    it('returns an error message if not given a number.', () => {
      expect(getDesitnationById('Lisa'))
        .to.be.equal('Please enter a passenger id number.')
    })

    it('returns the passenger destination when given their id.', () => {
      return getDesitnationById(2)
        .then( response => {
          expect(response.ticket)
            .to.be.equal('Waterfront')
        })
    })

  })

  context('getDesitnationByName()', () => {
    it('returns an error message if not given a string.', () => {
      expect(getDesitnationByName(2)).to.be.equal('Please enter the name of a passenger.')
    })
    it('returns the destination of a passenger when given thier name.', () => {
      return getDesitnationByName('Lisa').then( response => {
        expect(response.ticket).to.be.equal('Waterfront')
      })
    })
  })

  context('getCurrentStationByPassengerName()', () => {
    it('returns an error when given a number.', () => {
      expect(getCurrentStationByPassengerName(2)).to.be
      .equal('Please enter the name of a passenger to find thier location.')
    })
    it('returns the current station of a passenger given thier name.', () => {
      return getCurrentStationByPassengerName('Lisa').then(response => {
        expect(response.current_station).to.be.equal('Downtown')
      })
    })
  })

  context('getCurrentStationByPassengerId()', () => {
    it('returns an error when given a string.', () => {
      expect(getCurrentStationByPassengerId('Lisa')).to.be
      .equal('Please enter the id of a passenger to find thier location.')
    })
    it('returns the current station of a passenger given thier id.', () => {
      return getCurrentStationByPassengerId(2).then(response => {
        expect(response.current_station).to.be.equal('Downtown')
      })
    })
  })

  context('getAllPassenersByStationName()', ()=> {
    it('returns an error if given a number.', () => {
      expect(getAllPassenersByStationName(2)).to.be
        .equal('Please enter a station name to find all passengers.')
    })
    it('returns all passengers at a station when given a station name.', () => {
      return getAllPassenersByStationName('Waterfront').then( response => {
        expect(response.name).to.be.equal('Sam')
      })
    })
  })

  context('getTrainIdByPassengerId()', () => {
    it('returns an error if given a string.', () => {
      expect(getTrainIdByPassengerId('Lisa')).to.be
        .equal('Please enter a passenger id to find their train.')
    })
    it('returns the train id when given passeneger id number.', () => {
      return getTrainIdByPassengerId(2).then( response => {
        expect(response.current_train_id).to.be.equal(2)
      })
    })
  })
  context('getTrainIdByPassengerName()', () => {
    it('returns an error if given a number.', () => {
      expect(getTrainIdByPassengerName(2)).to.be
        .equal('Please enter a passenger name to find their train.')
    })
    it('returns the train id when given the name of a passeneger.', () => {
      return getTrainIdByPassengerName('Lisa').then( response => {
        expect(response.current_train_id).to.be.equal(2)
      })
    })
  })

  context('getAllPassenersByTrainId()', () => {
    it('returns an error if given a string.', () => {
      expect(getAllPassenersByTrainId('Lisa')).to.be
        .equal('Please enter a train id to find the passengers aboard.')
    })
    it('returns the passengers aboard when given a train id.', () => {
      return getAllPassenersByTrainId(2).then( response => {
        expect(response.name).to.be.equal('Lisa')
      })
    })
  })

  context('createNewPassenger()', () => {
    it('should create a new passenger in our database.' , () => {
      expect(createNewPassenger('Stephanie', '10th Ave', 'Forest Gardens', 1))
        .to.be.equal('Thank you for joining the metrorail system!')
    })
  })
})
