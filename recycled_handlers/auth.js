const asyncHandler = require('../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.authSuccess = (req, res) => {
    res.send('authsuccess')
}
exports.authFailed = (req, res) => {
    res.send('authfailed')
}
exports.authTimeout = (req, res) => {
    res.send('authtimeout')
}