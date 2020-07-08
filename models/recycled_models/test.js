const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    test1: {
        type: String
    },
    test2: {
        type: String
    }
})

module.exports = mongoose.model('Test', TestSchema)