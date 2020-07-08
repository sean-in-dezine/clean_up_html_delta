let log = console.log
// const mongoose = require('mongoose')
// const User = require('./models/User')

// !reqlogger
exports.reqlogger = (req, res, next) => {

    // log(res)

    let w = res.body;

    function getBody(res) {
        for (var key in res) {
            log(key);
        }
    }
    // log('getbody - res'.green)
    // getBody(res)

    function getReq(res) {
        for (var key in res.req) {
            log(key);
        }
    }
    // log(`output data is: ${res.outputData}`.blue)
    // log(`output size is: ${res.outputSize}`.blue)
    if (res.statusCode == 200) {
        res.statusMessage = 'successful request';
    } else {
        res.statusMessage = 'not 200';
    }
    log(res.getHeaders());
    if (req.method !== undefined) {

        log(req.body);

        // !harmeet
        // * i want to view the response body if there is one.
        // let w = () => {res.json()}
        let periods = '..'
        log(`\n.\n..`.magenta, `<~${req.method.magenta}~>${periods.magenta} request to ${req.url.magenta}  \nfrom ip ${req.ip.blue} \nfull: ${req.protocol.yellow}://${req.get('host').yellow}${req.originalUrl.yellow} \n${res.statusCode} ${res.statusMessage} \ncomplete: ${res.req.complete.toString().magenta} \nrequest body:${JSON.stringify(res.req.body)} `, `\n.`.magenta)
        log(req.ipInfo)


    } else {
        log('~req.method undefined'.red[reqlogger])
    }

    // async function getRes() {
    //     await log(res.body)


    //     // log(JSON.stringify(req.res.body))
    //     // log(JSON.stringify(res.body))
    //     // log(res)
    //     // log('look up^^^^'.blue)
    // }
    // getRes()
    next()
}

// exports.reslogger = (req, res, next) => {
//    log('test')
//    return  log(res)

// }

// // !getmodels
// exports.getModels = () => {
//     const Log = require('./models/Log')
//     const Loop = require('./models/Loop')
//     const Permissions = require('./models/Permissions')
//     const User = require('./models/User')
//     log('~db models connected to server'.grey, '[getModels()]')
// }