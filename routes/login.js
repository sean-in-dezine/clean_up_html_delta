const express = require('express')
const router = express.Router()


// login
// const login = '/api/v1/login'
// const logout = '/api/v1/logout'

const { login, logout } = require('../controllers/login')


router.get('/', login)
router.get('/logout', logout)

module.exports = router