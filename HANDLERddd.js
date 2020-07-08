const log = console.log
const colors = require('colors')
const dirname = require('./server.js')
const mongoose = require('mongoose')


log('handler connected'.grey, '[handlers]')
// const {reslogger} = require('./middleware')
// const http = require('http')
// *model
// exports. = (req, res, next) => {

//     log(req.method)
//     if (req.method === 'GET') {

//     } else if (req.method === 'POST') {

//     } else {
//         res.send(`something happened on ${req.method.magenta}, not sure if error `)
//     }



// }
const Log = require('./models/Log')
const Loop = require('./models/Loop')
const Permissions = require('./models/Permissions')
const User = require('./models/User')

// log(User)

exports.register = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('create')
    } else if (req.method === 'POST') {
        let obj = req.body
        log(`CREATE USER>`.brightBlue, `${JSON.stringify(obj)} \n`.blue)

        const createUser = () => {
            const name = obj.username
            const badge = obj.badge
            const email = obj.email
            const password = obj.password
            log(`${[name, badge, email, password]}`.red)

            // !eventually a m/w fn
            // function dataSanitization() {
            //     return 1
            // }
            // dataSanitization()

            // log('ln 55 <<>> submit err is in handlers.js'.red)
            // // !
            try {
                const user = User.create({
                    name: obj.username,
                    badge: obj.badge,
                    email: obj.email,
                    password: obj.password
                }).catch(err => log(`${err}`.red)
                )
                // throw new Error('hiiiiiiii')
                log(`trying to create user`.bold.brightRed, `++notes~`.brightGreen)
                // throw new Error('it\'s fuckin wild out here')

            } catch (err) {
                // log(err)
                
                log(`An error occurred. This is probably something other than validation, because this doesn't execute if validation fails, which has a catch() on the User.create (model.method) in the handler associated with users. \n error begins below:`.grey ,`\n${err}`.red)
                
                
               res.json({
                    response: 'failed'
                })
            }
            // const user = User.create({
            //     name: obj.username,
            //     badge: obj.badge,
            //     email: obj.email,
            //     password: obj.password
            // })

            // log(' here . .'.brightRed)
            // // User.create(user)  
            // log(User.loadClass.toString(),
            //     User.methods,
            //     User.method().toString(),
            //     JSON.stringify({
            //         User
            //     }, null, '\t')


        }


        createUser()
        // res.json({
        //     response: 'valid'
        // })
    } else {
        res.json({
            success: 'false'
        })
    }
}





exports.cashchannel = (req, res, next) => {



    if (req.method === 'GET') {
        //    log(`${reslogger(res)} .. before`)
        // log(reqlogger.reqlogger)
        // log(reslogger.reslogger())
        res.sendFile(dirname.dirname + '/public/cashboard.html')
        // log(`${reslogger({res})} .. after`)
    } else if (req.method === 'POST') {
        log('cashboard accessed'.blue)
        res.send('pooooosty cashmoney')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }
}
exports.pending = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('pending')
    } else if (req.method === 'POST') {
        res.send('posty pending')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}

exports.current = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('current')
    } else if (req.method === 'POST') {
        res.send('posty current')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.guys = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('my guys')
    } else if (req.method === 'POST') {
        res.send('posty my guys')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.past = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('past')
    } else if (req.method === 'POST') {
        res.send('posty past')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.card = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('card')
    } else if (req.method === 'POST') {
        res.send('posty card')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.form = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('form')
    } else if (req.method === 'POST') {
        res.send('posty form')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.notes = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('notes')
    } else if (req.method === 'POST') {
        res.send('posty notes')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.logchannel = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('log')
    } else if (req.method === 'POST') {
        res.send('posty log')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.sea = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('of data')
    } else if (req.method === 'POST') {
        res.send('posty ocean')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}
exports.inception = (req, res, next) => {


    if (req.method === 'GET') {
        res.send('now this is some movie shit right here')
    } else if (req.method === 'POST') {
        res.send('posty user inception... avatarlikestatus')
    } else {
        res.send(`something happened on ${req.method.magenta}, not sure if error `)
    }



}


exports.users = (req, res, next) => {
    if (req.method === 'GET') {

        res.json({
            connected: 'handler'
        })
    } else if (req.method === 'POST') {
        res.json({
            server: 'say\'s hello'
        })
    } else {
        console.error('some sort of problem on ', req.url)
    }
}