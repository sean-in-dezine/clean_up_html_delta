const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    phone: {
        type: String,
        required: [true, 'phone required for 2 factor authentication']
    },
    badge: {
        type: String,
        required: [true, 'badge number required for proof u work at SBEC buddy']
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
    // permissions: {

    // },
    // loops: {

    // },
    // guys: {

    // }
})

// module.exports = mongoose.model('User', userSchema)

// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Username is required']
//     },
//     password: {
//         type: String,
//         required: [true, 'Please add a password'],
//         minlength: 6,
//         select: false
//     },
//     phone: {
//         type: String,
//         required: [true, 'phone required for 2 factor authentication']
//     },
//     badge: {
//         type: String,
//         required: [true, 'badge number required for proof u work at SBEC buddy']
//     },
//     email: {
//         type: String,
//         required: [true, 'Email required'],
//         unique: true,
//         match: [
//             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//             'Please add a valid email'
//         ]
//     },

//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
//     // permissions: {

//     // },
//     // loops: {

//     // },
//     // guys: {

//     // }
// })

module.exports = mongoose.model('User', userSchema)