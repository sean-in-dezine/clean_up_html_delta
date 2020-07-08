const express = require('express')
const router = express.Router()

const { recentChanges, rcByUser, rcByFolder, rcByPackage, rcBySystem, rcByStatus, rcByPrelooped, rcByInQC, rcByBackQC, rcByNeedsHydro, rcByNeedsVendocs, rcByRejected, rcByWaiting, rcBySold, rcByWorking, rcByReadyPre, rcByReadySell, rcByTrouble, rcByNeedsValues, rcByBuilt, rcByNotBuilt, rcByBeginning, rcByFieldComplete, rcByTechWalked, rcByMostChanged, rcByMostChangedFolders, rcByMostChangedUsers, rcByComments } = require('../controllers/log')



router.get('/recent', recentChanges)
router.get('/recent/user', rcByUser)
router.get('/recent/folder', rcByFolder)
router.get('/recent/package', rcByPackage)
router.get('/recent/system', rcBySystem)
router.get('/recent/status', rcByStatus)
router.get('/recent/status/prelooped', rcByPrelooped)
router.get('/recent/status/inqc', rcByInQC)
router.get('/recent/status/backfromqc', rcByBackQC)
router.get('/recent/status/needshydro', rcByNeedsHydro)
router.get('/recent/status/needsvendocs', rcByNeedsVendocs)
router.get('/recent/status/rejected', rcByRejected)
router.get('/recent/status/waiting', rcByWaiting)
router.get('/recent/status/sold', rcBySold)
router.get('/recent/status/working', rcByWorking)
router.get('/recent/status/readyforpreloop', rcByReadyPre)
router.get('/recent/status/readyforsale', rcByReadySell)
router.get('/recent/status/trouble', rcByTrouble)
router.get('/recent/status/needsvalues', rcByNeedsValues)
router.get('/recent/status/built', rcByBuilt)
router.get('/recent/status/notbuilt', rcByNotBuilt)
router.get('/recent/status/unchanged', rcByBeginning)
router.get('/recent/status/fieldcomplete', rcByFieldComplete)
router.get('/recent/status/techwalked', rcByTechWalked)
router.get('/recent/mostchanged', rcByMostChanged)
router.get('/recent/mostchanged/folders', rcByMostChangedFolders)
router.get('/recent/mostchanged/users', rcByMostChangedUsers)
router.get('/recent/comments', rcByComments)


module.exports = router