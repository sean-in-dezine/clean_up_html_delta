const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse')
// const Test = require('../models/test')
// const User = require('../models/users')
// exports.testRoute = (req, res) => {
//     res.send('hello from test')
// }

// exports.testRoute = asyncHandler(async (req, res, next) => {
//     res.status(200).json({success: true})
// })

// exports.testRoute = asyncHandler(async (req, res, next) => {
//     const test = await User.findById()

//     res.status(200).json({
//         success: true,
//         data: test
//     })
// })

exports.testRoute = (req, res) => {
    res.send('test router')
}