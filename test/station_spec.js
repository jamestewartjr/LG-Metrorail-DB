const mocha = require('mocha')
const { expect } = require('chai')
const {
  getStationIdByName,
  getStationLocationById,
  getWaitingPassengerCount,
  getPreviousTrainStation,
  getNextTrainStation,
  createStation,
  updateStationByName,
  deleteStationByName
} = require('../models/station.js')


describe('Station Model', () => {

  // beforeEach( () => {
  //   psql lg-metrorail-db < ./database/reset_schema.sql && npm run db:migrate && npm run db:seed
  // })

  context('getStationIdByName()', ()=> {
    it('returns an error if a string is not given' , () => {
      let stationName = 2
      expect(getStationIdByName(stationName))
        .to.be.equal('Please provide station name.')
    })

    it('returns the ID of a station when station name given', () => {
      let stationName = 'Annex'
      return getStationIdByName(stationName)
        .then(record => {
          expect(record.id).to.equal(4)
      })
    })
  })

  context('getStationLocationById()', () => {
    it('returns an error if an integer is not provided', () => {
      let id = 'notId'
      expect(getStationLocationById(id))
        .to.be.equal('Please provide a station id.')
    })

    it('returns a station id when given a station name', () => {
      let id = 4
      return getStationLocationById(id).then(record => {
        expect(record.name).to.equal('Annex')
      })
    })
  })

  context('getWaitingPassengerCount()', () => {
    it('returns an error if a string is not provided', () => {
      let stationName = 2
      expect(getWaitingPassengerCount(stationName))
        .to.be.equal('Please provide a station name.')
    })

    it('returns the number passengers waiting at a station name', () => {
      let stationName = 'Annex'
      return getWaitingPassengerCount(stationName)
        .then(record => {
          expect(record.passengers_waiting).to.equal(5)
      })
    })
  })

  context('getPreviousTrainStation()', () => {
    it('returns an error if a string is not provided', () => {
      let stationName = [2]
      expect(getPreviousTrainStation(stationName))
        .to.be.equal('Please provide a station name.')
    })

    it('returns the name of a previous station when given a station name', () => {
      let stationName = 'Annex'
      return getPreviousTrainStation(stationName)
        .then(record => {
          expect(record.previous_station).to.equal('Forest Gardens')
      })
    })
  })

  context('getNextTrainStation()', () => {
    it('returns an error if a string is not provided', () => {
      let stationName = [2]
      expect(getNextTrainStation(stationName))
        .to.be.equal('Please provide a station name.')
    })

    it('returns the name of the next station when given a station name', () => {
      let stationName = 'Annex'
      return getNextTrainStation(stationName)
        .then(record => {
          expect(record.next_station).to.equal('10th Ave')
      })
    })
  })

  context('createStation()', () => {
    it('returns a message when a new station is created', () => {
      expect( createStation('Colosseum', 200, 'Waterfront', 'Central Station') )
        .to.equal('Thank you for expanding the transit system.')
    })
  })

  context('updateStationByName()', () => {
    it('returns a message station when a station is updated', () => {
      expect(updateStationByName('Colosseum', 300, 'Waterfront', 'Central Station'))
      .to.equal('Thank you for updating the transit system.')
    })
  })

  context('deleteStationByName()', () => {
    it('returns an error if a string is not provided', () => {
      let stationName = 2
      expect(deleteStationByName(stationName))
        .to.be.equal('Please provide a station name.')
    })

    it('returns a message when a station has been deleted', () => {
      let stationName = 'Annex'
        expect(deleteStationByName(stationName)).to.equal('Thank you for deleting the transit station.')
      })
    })


})
