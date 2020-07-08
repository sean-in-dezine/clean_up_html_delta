const express = require('express')
const router = express.Router()

const { indexRoute } = require('../controllers/index')


router.get('/', indexRoute)

module.exports = router