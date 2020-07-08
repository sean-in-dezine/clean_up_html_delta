const express = require('express')
const router = express.Router()


const { authSuccess, authFailed, authTimeout } = require('../controllers/auth')


router.get('/success=true', authSuccess)
router.get('/success=false', authFailed)
router.get('/timeout=true', authTimeout)


module.exports = router