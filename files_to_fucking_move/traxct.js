const {
    checkout
} = require("../routes")

let transaction
const User = require('../models/User')

const oneOf = (User) => {
    // get user id, assign ref to variables to user in later objs
}

let usera = oneOf(User)
let userb = oneOf(User)

let authcookie
let sanitize
let adminstatus = {
    default: true,
    else: false
}

exports.globaltimer = {
    display: adminstatus.default,
    fn: requireAdmin = () => {
        //every 10 minutes, check to see if admin logged in.
        //however, timer resets if an admin LOGS in or does an action, which triggers adminstatus to return to default.
    }
}

exports.adminchat = {
    fn: openTag = () => {
        // click on banner to @admin[user] in global chat/notes

    }
}

exports.chatInit = {
    fn: chatInit = () => {
        // user posts chat to admin, separate log module/socket chat initted
        // admin user notified
        const notifications = require('./notifications')
    }
}

let permissions
// require

let loop
let action = {
    type: 'type'
}


let transactionPromise = new Promise()


const transactionPromiseInit = () => {
    log('initting transaction promise')


}

const initTransfer = () => {
    log('init xf')

    transactionPromiseInit()
}
initTransfer()