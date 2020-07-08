const asyncHandler = require('../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.getAllUsers = (req, res) => {
    res.send('get all users')
}
exports.getSingleUser = (req, res) => {
    res.send('get single user')
}
exports.getAssignments = (req, res) => {
    res.send('get assignments')
}
exports.getAssignIn = (req, res) => {
    res.send('get assignments IN')
}
exports.getAssignOut = (req, res) => {
    res.send('get assigments OUT')
}
exports.getAssignIncomplete = (req, res) => {
    res.send('get assigments incomplete')
}
exports.getAssignRej = (req, res) => {
    res.send('get assigments that have been rejected')
}
exports.getAssignPass = (req, res) => {
    res.send('get assignments that have passed')
}
exports.getSold = (req, res) => {
    res.send('get all sold')
}
exports.getSoldUser = (req, res) => {
    res.send('get sold by user')
}
exports.getBySystem = (req, res) => {
    res.send('get by system')
}
exports.getByPackage = (req, res) => {
    res.send('get by package')
}
exports.getByLoop = (req, res) => {
    res.send('get by loop')
}


// TBA
exports.getAll = (req, res) => {
    res.send('get all')
    // add one for each status here
}

// dashboard/getall/
const getAllStatus = '/api/v1/dashboard/getall' // they'll select status
// build one for each status