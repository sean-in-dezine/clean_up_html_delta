const express = require('express')
const router = express.Router()

// // bugs
// const reportBugs = '/api/v1/bugs/report'
// const viewBugs = '/api/v1/bugs/view'
// const viewTicket = '/api/v1/bugs/report/ticket'

const {reportBugs, viewBugs, viewTicket} = require('../controllers/bugs')


router.get('/report', reportBugs)
router.get('/view', viewBugs)
router.get('/ticket', viewTicket)

module.exports = router