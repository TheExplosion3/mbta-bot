const fortune = require('fortune')
const pgAdapter = require('fortune-postgres')
const fortuneWS = require('fortune-ws')

import sql from './../database/db.js'

// end imports

// localized storage
const adapter = [ pgAdapter, {
  // In this example, the Postgres adapter requires the connection URL.
  url: 'postgres://postgres@localhost:5432/app_db'
} ]

const store = fortune(recordTypes, { adapter })

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


const options = { port: 1337 }
const server = fortuneWS(store, (state, changes) => {
  // Whitelist state changes.
  if (!changes) return { users: Array.isArray(state.users) ? state.users : [] }

  // Only send new posts from users that are being followed.
  if (changes[methods.create] && changes[methods.create].post) {
    const post = state.users ? changes[methods.create].post
      .filter(post => ~state.users.indexOf(post.author)) : []

    if (post.length) return { [methods.create]: { post } }
  }
}, options)

var client = new WebSocket('api-v3.mbta.com/', protocols)
fortune.net.request(client, options)