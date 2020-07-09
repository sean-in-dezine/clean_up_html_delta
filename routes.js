const express = require("express");
const router = express.Router();
const log = console.log;


console.log('router'.brightMagenta)

// const {users, alpha} = require('./handlers')
let users = require('./handlers')
users = users.users





const {
  createUser,
  updateUser,
  changePassword,
  forgotPassword,
  restructureUsers,
  upgradePermissions
} = require('./handlers/recycled_handlers/users')

const {
  trainingHome
} = require('./handlers/recycled_handlers/training')
const {
  rejectionRate,
  rejectByDate,
  rejectByUser,
  statOverview
} = require('./handlers/recycled_handlers/stats')
const {
  searchLoops,
  searchSystems,
  searchHydro,
  searchDate,
  searchText,
  searchLog,
  searchUsers,
  searchTrouble,
  searchMissingVendocs
} = require('./handlers/recycled_handlers/search')
const {
  requestOwnership,
  assignOwnership
} = require('./handlers/recycled_handlers/xfr')
const {
  login,
  logout
} = require('./handlers/recycled_handlers/login')
const {
  indexRoute
} = require('./handlers/recycled_handlers/login')


const {
  cashSearch
} = require('./handlers/search')

// !currently in production below
//* cashboard
router
  .route('/cash/money')
  .get((req, res, next) => {
    res.sendFile(__dirname + '/public/cashboard.html')
  })


router
  .route('/search')
  .post(cashSearch)

router
  .route('/login')
  .get(login)
  .post(login)


router
  .route('/users')
  .post(users)

const {
  register
} = require('./handlers')
// register = register.register
// !delete
// .post((req, res, next) => {
//   console.log(req.url, req.method);
//   console.log(req.originalUrl, req.method);
//   res.json({
//     success: "tr00",
//   });
// });


// !register
// !register
// !register
router
  .route('/register')
  .get((req, res, next) => {
    res.sendFile(__dirname + '/public/register/register.html')
  })
  .post(register)


router
  .route('/register/users')
  .get(users)
  .post(users)




// !register
// !register
// !register


// !7/8
router
  .route('/admin')
  .post((req, res, next) => {
    res.json({
      USER: "ADMIN",
      login: "canigetawhatwhat"
    })
  })
router
  .route('/hackerattempt')
  .post((req, res, next) => {
    res.json({
      hackerattempt: 'logged'
    })
  })



router
  .route('/forms')
  .post((req, res, next) => {
    res.json({
      forms: "request received, here is your res"
    })
  })


router
  .route('/notes')
  .post((req, res, next) => {

    let body = req.body.params
    res.json({
      ahh: "my dear lad",
      yee_sent_me: "yarg",
      and_a_little_sumthin_extra: body
    })
  })

router
  .route('/card')
  .post((req, res, next) => {
    res.json({
      thanks: 'for the successful post to the card rt'
    })
  })

router
  .route('/reports')
  .post((req, res, next) => {
    res.json({
      reports: "accessed"
    })
  })


// !currently in production above

// *

// !not currently in production below

router.get('/training', trainingHome)
router.get('/logout', logout)

router.get('/request', requestOwnership)
router.get('/assign', assignOwnership)


router.get('/loops', searchLoops)
router.get('/systems', searchSystems)
router.get('/hydro', searchHydro)
router.get('/date', searchDate)
router.get('/text', searchText)
router.get('/log', searchLog)
router.get('/users', searchUsers)
router.get('/trouble', searchTrouble)
router.get('/missingvendocs', searchMissingVendocs)



const {
  recentChanges,
  rcByUser,
  rcByFolder,
  rcByPackage,
  rcBySystem,
  rcByStatus,
  rcByPrelooped,
  rcByInQC,
  rcByBackQC,
  rcByNeedsHydro,
  rcByNeedsVendocs,
  rcByRejected,
  rcByWaiting,
  rcBySold,
  rcByWorking,
  rcByReadyPre,
  rcByReadySell,
  rcByTrouble,
  rcByNeedsValues,
  rcByBuilt,
  rcByNotBuilt,
  rcByBeginning,
  rcByFieldComplete,
  rcByTechWalked,
  rcByMostChanged,
  rcByMostChangedFolders,
  rcByMostChangedUsers,
  rcByComments
} = require('./handlers/recycled_handlers/log')
const {
  getForm,
  postForm,
  viewForms,
  manageForms,
  requestForm,
  addComment,
  addCommentForm
} = require('./handlers/recycled_handlers/forms')
const {
  getAllUsers,
  getSingleUser,
  getAssignments,
  getAssignOut,
  getAssignIn,
  getAssignIncomplete,
  getAssignRej,
  getAssignPass,
  getSold,
  getSoldUser,
  getBySystem,
  getByPackage,
  getByLoop,
  getAll
} = require('./handlers/recycled_handlers/dashboard')
const {
  reportBugs,
  viewBugs,
  viewTicket
} = require('./handlers/recycled_handlers/bugs')
const {
  authSuccess,
  authFailed,
  authTimeout
} = require('./handlers/recycled_handlers/auth')


const acceptAll = (req, res, next) => {
  res.json({
    all: "you've requested"
  })
}



// !admin > login as user {}
// !admin > view as user: 

// !command in developer console

// !basically all of the routes are accessible to admins within the developer tools console 

// ! these have to be sent with the admin route.


router.get('/pending/acceptall', acceptAll)

router.get('/success=true', authSuccess)
router.get('/success=false', authFailed)
router.get('/timeout=true', authTimeout)
router.get('/report', reportBugs)
router.get('/view', viewBugs)
router.get('/ticket', viewTicket)


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


router.get('/form', getForm)
router.post('/form', postForm)
router.get('/viewforms', viewForms)
router.get('/manageforms', manageForms)
router.get('/requestform', requestForm)
router.get('/comment/add', addComment)
router.get('/comment/add/form', addCommentForm)

// router.get('/asdfsadfsadfsadf', indexRoute)

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



router.get('/rejectionrate', rejectionRate)
router.get('/rejectionrate/date', rejectByDate)
router.get('/rejectionrate/user', rejectByUser)
router.get('/overview', statOverview)


// !end of not currently in produciton



module.exports = router;