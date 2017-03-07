const mocha = require('mocha')
const { expect } = require('chai')
const {
  getTrainId,
  getTrainCapacityById,
  getPassengerCountById
 } = require('../models/train.js')


describe('Train Model', () => {

  context('getTrainId()', ()=> {
    it('returns an error if a string is not given' , () => {
      let station = 2
      expect(getTrainId(station)).to.be.equal('Please insert current train station name.')
    })
    // it('returns an error if the train station is not found', () => {
    //   let station = 'Booya'
    //   return getTrainId(station)
    //     .catch(record => {
    //       expect(record).to.equal('No train found at that station.')
    //     })
    // })
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

  context.only('getPassengerCountById', () => {
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
})
