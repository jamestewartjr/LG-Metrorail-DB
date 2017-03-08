const mocha = require('mocha')
const { expect } = require('chai')
const {
  getStationId
} = require('../models/station.js')


describe('Station Model', () => {

  context.only('getStationId()', ()=> {
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
})
