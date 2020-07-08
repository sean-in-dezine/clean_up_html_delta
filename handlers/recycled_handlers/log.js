const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.recentChanges = (req, res) => {
    res.send('recent changes')
}
exports.rcByUser = (req, res) => {
    res.send('recent by user')
}
exports.rcByFolder = (req, res) => {
    res.send('rc by folder')
}
exports.rcByPackage = (req, res) => {
    res.send('rc by package')
}
exports.rcBySystem = (req, res) => {
    res.send('rc by system')
}
exports.rcByStatus = (req, res) => {
    res.send('rc by status')
}
exports.rcByPrelooped = (req, res) => {
    res.send('rc by prelooped')
}
exports.rcByInQC = (req, res) => {
    res.send('rc by in qc')
}
exports.rcByBackQC = (req, res) => {
    res.send('rc by back qc')
}
exports.rcByNeedsHydro = (req, res) => {
    res.send('rc by needs hydro')
}
exports.rcByNeedsVendocs = (req, res) => {
    res.send('rc by needs vendocs')
}
exports.rcByRejected = (req, res) => {
    res.send('rc by rejected')
}
exports.rcByWaiting = (req, res) => {
    res.send('rc by waiting')
}
exports.rcBySold = (req, res) => {
    res.send('rc by sold')
}
exports.rcByWorking = (req, res) => {
    res.send('rc by working')
}
exports.rcByReadyPre = (req, res) => {
    res.send('rc by ready pre')
}
exports.rcByReadySell = (req, res) => {
    res.send('rc by ready sell')
}
exports.rcByTrouble = (req, res) => {
    res.send('rc by trouble')
}
exports.rcByNeedsValues = (req, res) => {
    res.send('rc by needs values')
}
exports.rcByBuilt = (req, res) => {
    res.send('rc by built')
}
exports.rcByNotBuilt = (req, res) => {
    res.send('rc by not built')
}
exports.rcByBeginning = (req, res) => {
    res.send('rc by beginning')
}
exports.rcByFieldComplete = (req, res) => {
    res.send('rc by field complete')
}
exports.rcByTechWalked = (req, res) => {
    res.send('rc by tech walked')
}
exports.rcByMostChanged = (req, res) => {
    res.send('rc by most changed')
}
exports.rcByMostChangedFolders = (req, res) => {
    res.send('rcByMostChangedFolders')
}
exports.rcByMostChangedUsers = (req, res) => {
    res.send('rc by most changed users')
}
exports.rcByComments = (req, res) => {
    res.send('rc by comments')
}