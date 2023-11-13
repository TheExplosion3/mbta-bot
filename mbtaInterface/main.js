const fortune = require('fortune')

// objects for the system
const recordTypes = {
    train: {
        name: String,
        currentStop: 'station',
        trainID: Number,
        isBoarding: Boolean,
        isApproaching: Boolean,
        carCount: Number
    },

    station: {
        name: String,
        line: String,
        stopNumber: Number,
        isOccupied: Boolean
    },
    
    line: {
        name: String,
        currentNumberOfTrains: Number
    },

    serviceAlert: {
        alertType: String,
        alertContents: String,
        line: 'line'
    }
}