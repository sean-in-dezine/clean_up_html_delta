const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.requestOwnership = (req, res) => {
    res.send('request ownership')
}
exports.assignOwnership = (req, res) => {
    res.send('assign ownership')
}