const asyncHandler = require('../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.createUser = (req, res) => {
    res.send('create user')
}
exports.updateUser = (req, res) => {
    res.send('update user')
}
exports.changePassword = (req, res) => {
    res.send('change password')
}
exports.forgotPassword = (req, res) => {
    res.send('forgot password')
}
exports.restructureUsers = (req, res) => {
    res.send('restructure users')
}
exports.upgradePermissions = (req, res) => {
    res.send('upgrade permissions')
}