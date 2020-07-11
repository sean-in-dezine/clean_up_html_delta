// reject
// respond
// request
// admin transfer loop
// accept

const mongoose = require('mongoose')

exports.xfr_reject = (req, res, next) => {
    if (req.method === 'POST') {
        let addRejection = () => {
            Tranzakt.create({
                createdAt: Tranzakt.default
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
            addRejection()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    } else if (req.method === 'GET') {
        let getRejection = () => {
            Tranzakt.find({}, (err, result) => {
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
        getRejection()
    }
}