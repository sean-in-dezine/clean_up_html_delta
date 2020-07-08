const express = require('express')
const router = express.Router()


const { rejectionRate, rejectByDate, rejectByUser, statOverview } = require('../controllers/stats')


router.get('/rejectionrate', rejectionRate)
router.get('/rejectionrate/date', rejectByDate)
router.get('/rejectionrate/user', rejectByUser)
router.get('/overview', statOverview)

module.exports = router