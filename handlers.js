exports.handlers = (() => {
    console.log('handlers connected'.brightMagenta)
})

let request_logger = require('./middleware')
const {
    request
} = require('http')
request_logger = request_logger.request_logger






exports.ADMIN = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {


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


            let userid = 'userid'
            res.json({
                status: "logged in",
                user: userid
            })
        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}







exports.alpha = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            res.send('whoops, u mean 2 do that?')
        } else if (req.method === 'POST') {
            request_logger(req, res, next)
            // your logic goes here
            // console.log('something')
            console.log('post stuff here')
            res.send('post')

        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}

exports.users = (req, res, next) => {


    if (req.method === 'POST') {

        let params = res.req.body
        let body = params

        if (body !== undefined) {
            body = params.body
            console.log(body)
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

}