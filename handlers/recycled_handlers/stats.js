const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.rejectionRate = (req, res) => {
    res.send('rejection rate')
}
exports.rejectByDate = (req, res) => { 
    res.send('reject by date')
}
exports.rejectByUser = (req, res) => {
    res.send('reject by user')
}
exports.statOverview = (req, res) => {
    res.send('stat overview')
}