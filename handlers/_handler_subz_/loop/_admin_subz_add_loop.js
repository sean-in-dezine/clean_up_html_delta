const mongoose = require('mongoose')
const Loop = require('../../../models/recycled_models/loops')

exports.fboaddloop = (req, res, next) => {
    if (req.method === 'POST') {
        let addLoop = () => {
            Loop.create({
                createdAt: Loop.default
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
            addLoop()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}
