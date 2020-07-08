const express = require('express')
const router = express.Router()

// const requestOwnership = '/api/v1/loops/request'
// const assignOwernship = '/api/v1/loops/assign'

// router.get('/', (req, res) => {
//     res.send('Hello from the loop router')
// })
const {requestOwnership, assignOwnership} = require('../controllers/loops')


router.get('/request', requestOwnership )
router.get('/assign', assignOwnership)
module.exports = router