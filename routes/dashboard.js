const express = require('express')
const router = express.Router()

const {getAllUsers, getSingleUser, getAssignments, getAssignOut, getAssignIn, getAssignIncomplete, getAssignRej, getAssignPass, getSold, getSoldUser, getBySystem, getByPackage, getByLoop, getAll } = require('../controllers/dashboard')




router.get('/getallusers', getAllUsers)
router.get('/getsingleuser', getSingleUser)
router.get('/getassignments', getAssignments)
router.get('/getassignout', getAssignOut)
router.get('/getassignin', getAssignIn)
router.get('/getassignincomplete', getAssignIncomplete)
router.get('/getassignrej', getAssignRej)  
router.get('/getassignpass', getAssignPass)
router.get('/getsold', getSold)
router.get('/getsolduser', getSoldUser)
router.get('/getbysystem', getBySystem)
router.get('/getbypackage', getByPackage)
router.get('/getbyloop', getByLoop)
router.get('/getall', getAll)


module.exports = router