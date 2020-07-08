const express = require('express')
const router = express.Router()

const {
    createUser,
    updateUser,
    changePassword,
    forgotPassword,
    restructureUsers,
    upgradePermissions
} = require('../controllers/users')



router.get('/create', createUser)
router.get('/update', updateUser)
router.get('/change', changePassword)
router.get('/forgot', forgotPassword)
router.get('/restructure', restructureUsers)
router.get('/upgrade', upgradePermissions)

module.exports = router