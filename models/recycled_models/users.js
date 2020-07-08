const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 25
    },
    permissions: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        unique: true,
        required: true
    },
    phone: {
        type: String,
        maxlength: 20
    },
    position: {
        type: String
    },
    dateJoined: {
        type: Date
    },
    loginCount: {
        type: Number
    },
    dominion: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    assignmentsIn: {
        type: [String] //loops
    },
    assignmentsOut: {
        type: [String] //loops
    },
    employing: {
        type: [String] //other users
    },
    employedby: {
        type: [String] //other users
    }
})

module.exports = mongoose.model('Users', UsersSchema)