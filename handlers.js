const current_file = './handlers.js'

exports.handlers = (() => {
    console.log('handlers connected'.brightMagenta)
})

let request_logger = require('./middleware')
const {
    request
} = require('http')
request_logger = request_logger.request_logger


const alpha = require('./middleware/checkReqMethod')


exports.ADMIN = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {



            // ?[----------------------]
            // !admin code here
            // ?[----------------------]


            let userid = 'userid'
            res.json({
                admin: "logged in",
                user: userid
            })
        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}


exports.login = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {

            // ?[----------------------]
            // !login code here
            // ?[----------------------]

            let userid = 'userid'
            res.json({
                status: "logged in",
                user: userid
            })
        } else if (req.method === 'POST') {
            res.json({
                post: "yup"
            })
        } else {
            res.json({
                success: false
            })
        }
    }).catch(err => console.log(err))
}







// exports.alpha = (req, res, next) => {

//     function whateverAlphaIs() {

//         new Promise((resolve, reject) => {
//             if (req.method === 'GET') {
//                 res.send('whoops, u mean 2 do that?')
//             } else if (req.method === 'POST') {
//                 request_logger(req, res, next)
//                 // your logic goes here
//                 // console.log('something')
//                 console.log('post stuff here')
//                 res.send('post')

//             } else {
//                 res.json({
//                     sucess: false
//                 })
//             }
//         }).catch(err => console.log(err))
//     }

//     if (req.method !== undefined) {

//         whateverAlphaIs()
//     } else {
//         res.json({
//             success: notsogood
//         })
//     }
// }

// @api
// ?this is probably some shit code
// !get to /register/users/
// @api
exports.users = (req, res, next) => {
    new Promise((resolve, reject) => {

        if (req.method === 'GET') {
            res.json({
                success: 'helllll yeah'

            })
            resolve()
        }


        if (req.method === 'POST') {
            let params = res.req.body
            let body = params
            if (body !== undefined) {
                body = params.body

                // !get the user.... mongoose model find all that
                // !get mongodbatlas in cloud set up real quick too.
                //? console.log here %%log
                // ?[----------------------]
                // !getusers code here
                // ?[----------------------]


                console.log(params.body.fetch)
                res.json({
                    welcome: "kiddoze"
                })
            } else if (res.status === 'ok') {
                res.json({
                    success: "true"
                })
            }
        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => {
        let sendingstuff = 5

        return console.log(err)
    }).catch(err => console.log(err))
}



const checkCode = require('./middleware/checkCode')
const badReqMethod = require('./utils/badreqmethod')
exports.register = (req, res, next) => {

    console.log(alpha(req, res, next))

    function registerOrRaiseHellTrying() {
        new Promise((rez, rejz) => {
            if (req.method !== undefined) {
                new Promise((resolve, reject) => {
                    if (req.method === 'POST') {
                        console.log('registering')
                        // ?[----------------------]
                        // !registration code here
                        // ?[----------------------]

                        res.json({
                            itsabeautifyllld: "mornin aw yeah"
                        })
                        resolve()
                    } else {
                        console.log('code don\'t match'.brightRed)
                        badReqMethod(req, res, next)
                        throw new Error('method not post', req.method)
                    }
                }).catch(err => {
                    badReqMethod(req, res, next)
                    return console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
            badReqMethod(req, res, next)
        })

    }
    let code = checkCode(req, res, next)
    if (code === 'register/give-em-hell') {
        console.log('code matches, handlers.js>register>post'.brightGreen, `${current_file}`.brightRed)
        registerOrRaiseHellTrying()
    }
}