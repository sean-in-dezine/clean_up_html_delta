const LogModel = require('../../../../models/recycled_models/log')
const mongoose = require('mongoose')
exports.fboaddlog = (req, res, next) => {
    if (req.method === 'POST') {
        let addLog = () => {
            LogModel.create({
                createdAt: LogModel.default
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
            addLog()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}