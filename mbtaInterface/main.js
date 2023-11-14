const fortune = require('fortune')
const pgAdapter = require('fortune-postgres')

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