const log = console.log
const colors = require('colors')
const dirname = require('./server.js')
const mongoose = require('mongoose')


log('handler connected'.grey, '[handlers]')

const Log = require('./models/Log')
const Loop = require('./models/Loop')
const Permissions = require('./models/Permissions')
const User = require('./models/User')

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
            try {
                const user = User.create({
                    name: obj.username,
                    badge: obj.badge,
                    email: obj.email,
                    password: obj.password
                }).catch(err => log(`${err}`.red))
                log(`trying to create user`.bold.brightRed, `++notes~`.brightGreen)
            } catch (err) {
                log(`An error occurred. This is probably something other than validation, because this doesn't execute if validation fails, which has a catch() on the User.create (model.method) in the handler associated with users. \n error begins below:`.grey, `\n${err}`.red)
                res.json({
                    response: 'failed'
                })
            }
        }
        createUser()
    } else {
        res.json({
            success: 'false'
        })
    }
}