const mongoose = require('mongoose')
exports.fboupdateuser = (req, res, next) => {
    if (req.method === 'PUT') {
        let updateUser = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            updateUser()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}


const mongoose = require('mongoose')
exports.fboadduser = (req, res, next) => {
    if (req.method === 'POST') {
        let addUser = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            addUser()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}

const mongoose = require('mongoose')
exports.fbodeluser = (req, res, next) => {
    if (req.method === 'POST') {
        let delUser = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            delUser()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}

const mongoose = require('mongoose')
exports.fboupuseremail = (req, res, next) => {
    if (req.method === 'POST') {
        let updateUserEmail = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            updateUserEmail()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    } else if (req.method === 'GET') {
        let getUserEmail = () => {
            User.find({}, (err, result) => {
                if (!err) {
                    res.json({
                        result
                    })
                }
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        getUserEmail()
    }
}

const mongoose = require('mongoose')
exports.fbogetuser = (req, res, next) => {
    if (req.method === 'GET') {
        let getUser = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            getUser()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}

const mongoose = require('mongoose')
exports.fboupuserpassword = (req, res, next) => {
    if (req.method === 'POST') {
        let updateUserPassword = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            updateUserPassword()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}


const mongoose = require('mongoose')
exports.fboupuseraccess = (req, res, next) => {
    if (req.method === 'POST') {
        let updateUserAccess = () => {
            User.create({
                createdAt: User.default
            }).then(rezzzzie => {
                console.log('success')
                res.json({
                    transaction: 'sucessxs'
                })
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        try {
            updateUserAccess()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    } else if (req.method === 'GET') {
        let getUserAccess = () => {
            User.find({}, (err, result) => {
                if (!err) {
                    res.json({
                        result
                    })
                }
            }).catch(err => {
                res.json({
                    no: 'good',
                    err: err.stack,
                    sean: 'sean322'
                })
                return console.error(err.stack)
            })
        }
        getUserAccess()
    }
}