const express = require('express')
const router = express.Router()

const { trainingHome } = require('../controllers/training')


router.get('/', trainingHome)

module.exports = router