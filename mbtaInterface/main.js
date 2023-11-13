const fortune = require('fortune')

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

    alert: {
        alertType: String,
        alertContents: String,
        line: 'line',
        
    }
}