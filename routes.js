const express = require("express");
const router = express.Router();
const log = console.log;

log('~la rutadora esta connectada'.grey, '[router]')

router.route("/").get((req, res) => {

  const logobj = () => {
    if (req != undefined) {
      let obj = {
        a: req.url.magenta,
        b: req.headers.blue,
        // c: req.content.red,
        // d: req.body.magenta,
        ff: req.params.blue,
        f: req.method.magenta,
        // f: req.origin.red,
        // g: req.error.magenta
      };
      return obj;
    }
  };
  const consolereqs = logobj();
  log(consolereqs.a, consolereqs.b, consolereqs.f, consolereqs.ff);
  res.send("test");
});

// !going with cookies for now

// * model
/* *

router
.route('/')
.get((req, res) => {

})
.post((req, res) => {

})

*/






const login = require('./handlers.js')
const loops = require('./handlers.js')
const register = require("./handlers.js");
const cashmanager = require("./handlers.js");
const pending = require("./handlers.js");
const current = require("./handlers.js");
const guys = require("./handlers.js");
const past = require("./handlers.js");
const card = require("./handlers.js");
const sea = require("./handlers.js");
const notes = require("./handlers.js");
const logchannel = require("./handlers.js");
const admin = require("./handlers.js");
const inception = require("./handlers.js");
const form = require("./handlers.js");
const cashuser = require('./handlers.js')

const reqlogger = require("./middleware");
const reslogger = require('./middleware')
router.use(reqlogger.reqlogger);

const navigator = require('../public/js/navigator')
router.use(navigator)
// router.use(reslogger.reslogger)
router
  .route("/register/")
  .get(register.register)
  .post(register.register);

router
  .route('/login')
  .get(login.login)
  .post(login.login)


const cashmoney = "/cash/money";
const cashmoneyfilters = "/cash/money/filters";

let x;

if (x === true) {
  // !where cashmoney is defined, replace with cashmoneyfilters << harmeet >>
}


// !1end %sean
// ? how to make dynamic
// !unfinished
router
  .route(cashmoneyfilters)
  .get((req, res) => {

    res.json({
      Data: {
        options: [
          "filter1",
          "filter2",
          "filter3",
          "filter4",
          "filter6",
          "filter7",
          "filter8",
          "filter9",
        ],
        selected: []
      }
    })
  })


// *working
router
  .route('/loops')
  .get(loops.loops)
  .post(loops.loops)

router //dashboard (cashboard) root/cash/money
  .route(cashmoney)
  .get(cashmanager.cashchannel)
  .post(cashmanager.cashchannel);

router // pending section of the cashboard /root/cash/money/p
  // !unfinished
  .route(cashmoney + "/p")
  .get(pending.pending)
  .post(pending.pending);

// !unfinished
router
  .route(cashmoney + "/c")
  .get(current.current)
  .post(current.current);

router
  // !unfinished
  .route(cashmoney + "/c/guys")
  .get(guys.guys)
  .post(guys.guys);

// !unfinished
router
  .route(cashmoney + "/past")
  .get(past.past)
  .post(past.past);

// !unfinished
router
  .route(cashmoney + "/card")
  .get(card.card)
  .post(card.card);

// !unfinished
router
  .route(cashmoney + "/form")
  .get(form.form)
  .post(form.form);

// ?unfinished
router
  .route(cashmoney + "/notes")
  .get(notes.notes)
  .post(notes.notes);

// ?unfinished
router
  .route(cashmoney + "/log")
  .get(logchannel.logchannel)
  .post(logchannel.logchannel);

// !unfinished
router
  .route(cashmoney + "/sea")
  .get(sea.sea)
  .post(sea.sea);

// !unfinished
// ? view any user
router
  .route(cashmoney + "/inception")
  .get(inception.inception)
  .post(inception.inception);


const users = require('./handlers')
router
  .route('/register/users')
  .get(users.users)
  .post(users.users)


router
  .route('/register/?oneuser=*')
  .post(cashuser.cashuser)
// .post((req, res) => {

//   log(req.body)

//   res.json({
//     get: "users"
//   })
// })


module.exports = router;


