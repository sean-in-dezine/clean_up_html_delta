const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    entry: {
        // type: Number
        type: String

    },
    createdAt: {
        type: Date,
        default: Date.now

    },

    transactionCount: {
        type: Number,
        // required: true
    },
    fullStatusHistory: {
        type: [String],
        // required: true
    },
    fullPossessionHistory: {
        type: [String],
        // required: true
    },
    comments: {
        type: [String],
        // required: true
    }
})


module.exports = mongoose.model('LogModel', LogSchema)