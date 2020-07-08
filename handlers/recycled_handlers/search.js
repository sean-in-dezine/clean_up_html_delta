const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.searchLoops = (req, res) => {
    res.send('search loops')
}
exports.searchSystems = (req, res) => {
    res.send('search systems')
}
exports.searchHydro = (req, res) => {
    res.send('search hydro')
}
exports.searchDate = (req, res) => {
    res.send('search date')
}
exports.searchText = (req, res) => {
    res.send('search text')
}
exports.searchLog = (req, res) => {
    res.send('search log')
}
exports.searchUsers = (req, res) => {
    res.send('search users')
}
exports.searchTrouble = (req, res) => {
    res.send('search trouble')
}
exports.searchMissingVendocs = (req, res) => {
    res.send('search missing vendocs')
}