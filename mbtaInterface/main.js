const fortune = require('fortune')
const pgAdapter = require('fortune-postgres')
const fortuneWS = require('fortune-ws')
const fortuneHTTP = require('fortune-http')
const jsonApiSerializer = require('fortune-json-api')
const ipc = require('node-ipc')

// inter process interaction
ipc.config.id = 'mbta-api-interface';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.connectTo('runner', () => {
  ipc.of['jest-observer'].on('connect', () => {
    ipc.of['jest-observer'].emit('Connection Status', "Connection Successful - MBTA");
  });
});

import sql from './../database/db.js'

// localized storage
const adapter = [ pgAdapter, {
  // In this example, the Postgres adapter requires the connection URL.
  url: 'postgres://postgres@localhost:5432/app_db'
} ]

const store = fortune(recordTypes, { adapter })

// end imports & initial setup

// objects for the system
const recordTypes = {
    subwayTrain: {
        name: String,
        currentStop: 'station',
        trainID: Number,
        trainStatus: String,
        carCount: Number,
        destination: String,
        lastLocationUpdate: String,
        predictedTimeframe: String
    },

    commuterRailTrain: {
        name: String,
        currentStop: 'station',
        trainID: Number,
        trainStatus: String,
        trainLine: String,
        lastLocationUpdate: String,
        predictedTimeframe: String,
        trainSpeed: Number
    },

    station: {
        name: String,
        line: String,
        stopNumber: Number,
        isOccupiedNB: Boolean,
        isOccupiedSB: Boolean
    },
    
    line: {
        name: String,
        currentNumberOfTrains: Number
    },

    serviceAlert: {
        alertType: String,
        alertContents: String,
        line: 'line',
        timeframe: String,
        planned: Boolean
    }
}

options = {
  prefix: "/"
}
// `instance` is an instance of Fortune.js.
const listener = fortuneHTTP(instance, {
  serializers: [
    // The `options` object here is optional.
    [ jsonApiSerializer, options ]
  ]
})
// The listener function may be used as a standalone server, or
// may be composed as part of a framework.
const server = http.createServer((request, response) =>
  listener(request, response)
  .catch(error => { /* error logging */ }))

server.listen(8080)