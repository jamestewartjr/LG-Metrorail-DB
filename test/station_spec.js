const mocha = require('mocha')
const { expect } = require('chai')
const {
  getStationId,
  getStationLocation,
  getWaitingPassengerCount,
  getPreviousTrainStation,
  getNextTrainStation
} = require('../models/station.js')


describe('Station Model', () => {

  context('getStationId()', ()=> {
    it('returns an error if a string is not given' , () => {
      let stationName = 2
      expect(getStationId(stationName))
        .to.be.equal('Please provide station name.')
    })

    it('returns the ID of a station when give the name', () => {
      let stationName = 'Annex'
      return getStationId(stationName)
        .then(record => {
          expect(record.id).to.equal(4)
      })
    })
  })

  context('getStationLocation()', () => {
    it('returns an error if an integer is not provided', () => {
      let id = 'notId'
      expect(getStationLocation(id))
        .to.be.equal('Please provide a station id.')
    })

    it('returns a station id when given a station name', () => {
      let id = 4
      return getStationLocation(id).then(record => {
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

  context.only('getNextTrainStation()', () => {
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
})
