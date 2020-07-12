const express = require('express')
const app = express()

let log = console.log
const colors = require('colors')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const server = require('./database/init.js')
const cookieParser = require('cookie-parser')
const expressip = require('express-ip')
app.use(expressip().getIpInfoMiddleware)



let stacktrace = require('tracer').colorConsole({
    format: 'STACK::::\n{{stack}}'
})
let fntrace = require('tracer').colorConsole({
    format: 'start(). \nmethod:{{method}} (in {{file}}:{{line}}) \n .end()'
})
fntrace = fntrace.log


// let log = console.log


// const mongoose = require('mongoose')



// log(app.use(morgan('dev')))
// log(morgan('url'))
// log(morgan())
// const x = morgan()
// log(x)
// log(x)
// log(morgan())
// log(morgan.url.getUrlToken)
// log('test')
// log(morgan.format())

app.use(morgan('dev'))
app.use(cookieParser())

// app.use(morgan('dev'))
log('.'.brightRed, '\n~>', `\nlegend: \n`.grey, `\n{`.brightRed,
    `\n~script linked:`.grey, `files/functions`,
    `\nreq/res`.magenta,
    `\nconfirmation of handler success`.brightGreen,
    `\ncritical bugs/failures`.brightRed,
    `\ncore app functionality accessed/called`.brightBlue,

    ` \n}`.brightRed)

const timestamp = new Date()
const bigbear = {
    delta: log('.\n~~~'.blue),
    a: log('~big brother connected.'.grey),
    b: log('.\n.  ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ '.brightBlue, '.\n ∆ '.red, '∆'.brightRed, ' SBEC FIELD TECHNOLOGY '.blue, '∆'.brightRed, ' ∆'.red, '.\n. ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ ∆ '.brightBlue, '.\n.\n. CONSTRUCTION'.red, `.\n.   LOOP TRACKING APP.\n.`.red, `.\nfield| office| mobile| desktop| data| real-time| api|`.brightGreen, '.\n.\n.'.blue, `DELTA| ẟ ∆ ∂ Д д`.brightRed, '_'.grey, `alpha`.brightGreen.bold, '~>'.red, '.'.brightBlue, `\n.\n>`.brightGreen, `${timestamp} `.magenta, `\n<~`)
}
app.listen('1984', bigbear)
server()

const {

    reqlogger
} = require('./core/middleware')
// const getModels = require('./middleware')


app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(bodyparser.urlencoded({
    extended: false
}));
const router = require('./core/routes')
app.use(router, log)


const dirname = __dirname.toString();
exports.dirname = dirname;

// const reqlogger = require('./middleware')
app.use(reqlogger) //*initialize reqlogger m/w to use in handlers.

// const reslogger = require('./middleware')
// app.use(reslogger.reslogger)


const protos = require('./core/__protos')
const User = protos.User
const Sean = protos.Sean
const Legend = protos.Legend
User.prototype.adtlmethod = function () {
    log('additional... \n\n\n...method')
}
Sean.adtlmethod()
// log(Legend.Legend)

let serverconfig = new protos.Server(1984, 'localhost')
log(serverconfig)
let IP_s = new protos.IP_s('12.22.22.223', new Date(), Sean, false)
log(IP_s)