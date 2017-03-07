const mocha = require('mocha')
const { expect } = require('chai')
const { getTrainId } = require('../models/train.js')

describe('Train Model', () => {

  context.only('getTrainId()', ()=> {

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
      return getTrainId(station)
        .then(record => {
          expect(record.id).to.equal(1)
        })
    })

  })
})
