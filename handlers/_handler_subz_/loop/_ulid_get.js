const mongoose = require('mongoose')
const Loop = require('../../../models/recycled_models/loops')

const mongoose = require('mongoose')
exports.fbogetloop = (req, res, next) => {
    if (req.method === 'GET') {
        let getLoop = () => {
            Loop.find({}, (err, result) => {
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
        getLoop()
    }
}