const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.reportBugs = (req, res) => {
    res.send('report bugs')
}
exports.viewBugs = (req, res) => {
    res.send('view known bugs')
}
exports.viewTicket = (req, res) => {
    res.send('view ticket')
}