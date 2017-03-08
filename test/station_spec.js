const mocha = require('mocha')
const { expect } = require('chai')
const {
  getStationId,
  getStationLocation
} = require('../models/station.js')


describe('Station Model', () => {

  context('getStationId()', ()=> {
    it('returns an error if a string is not given' , () => {
      let stationName = 2
      expect(getStationId(stationName)).to.be.equal('Please provide station name.')
    })

    it('returns the ID of a station when give the name', () => {
      let stationName = 'Annex'
      return getStationId(stationName).then(record => {
        expect(record.id).to.equal(4)
      })
    })
  })

  context.only('getStationLocation()', () => {
    it('returns an error if an integer is not provided', () => {
      let id = 'notId'
      expect(getStationLocation(id)).to.be.equal('Please provide a station id.')
    })

    it('returns a station id when given a station name', () => {
      let id = 4
      return getStationLocation(id).then(record => {
        expect(record.name).to.equal('Annex')
      })
    })
  })
})
