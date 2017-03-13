const repl = require('repl')
// const train = require('./models/train.js')
// .load './models/train.js'
const context = repl.start({
  prompt: '^__^ --->  ',
}).context

context.train = require('./models/train.js')
context.passenger = require('./models/passenger.js')
context.station = require('./models/station.js')
