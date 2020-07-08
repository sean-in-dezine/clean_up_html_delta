const express = require('express')
const router = express.Router()

const {searchLoops, searchSystems, searchHydro, searchDate, searchText, searchLog, searchUsers, searchTrouble, searchMissingVendocs} = require('../controllers/search')



router.get('/loops', searchLoops)
router.get('/systems', searchSystems)
router.get('/hydro', searchHydro)
router.get('/date', searchDate)
router.get('/text', searchText)
router.get('/log', searchLog)
router.get('/users', searchUsers)
router.get('/trouble', searchTrouble)
router.get('/missingvendocs', searchMissingVendocs)
module.exports = router