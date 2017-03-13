# MetroRail

Modeling a city transit system.

This particular city has a simple transit system: just one circular train line with 12 stations and 4 trains.

Base repository for the [MetroRail goals](https://github.com/GuildCrafts/web-development-js/issues?utf8=%E2%9C%93&q=metrorail%20).

## Team Members

@jamestewartjr
@jhallman5

## Learners Guild Team Name

violet-gulls

## Installation and Setup

To install dependencies, type the following command in your terminal:
``` npm install ```

If you have PostgreSQL, create database by using command:
``` npm run db:create ```

Run this command to create your table migrations:
``` npm run db:migrate ```

Seed your database with test data:
``` npm run db:seed ```

To drop your database use command:
``` npm run db:drop ```

To reset your database by dropping, creating and seeding your database, use:
``` npm run db:reset ```

To load the REPL use:
``` npm run repl ```

To run quieres from the console, use:
``` npm run console ```
## Usage and Examples

## Example

``` const station = require('./models/station.js')
    const passenger = require('/models/passenger.js')

    //create a passenger Julia with parameters (name, destination, currentLocation, currentTrain)

    createNewPassenger(Julia, 'Downtown', 'Waterfront', 2)

    //To increment station
    






const Station = require('./models/station')
const Passenger = require('./models/passenger')

// let's move a passenger "Sam" from the Downtown station to Waterfront...
const sam = Passenger.find({name: 'Sam'})
const downtown = Station.find({location: 'Downtown'})
const waterfront = Station.find({location: 'Waterfront'})

sam.setStation(downtown)
sam.buyTicket({to: waterfront})

const train = downtown.nextTrain()
train.moveToNextStation()
train.onboard()

while (train.currentStation !== waterfront) {
  train.moveToNextStation()
}

train.offboard()
sam.currentStation
// Sam is now at the Waterfront!
