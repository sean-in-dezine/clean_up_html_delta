exports.tranzakt = (req, res, next) => {

    if (req.method === 'POST') {

        let addTranzakt = () => {
            Tranzakt.create({
                loopid: '1234',
                date: Tranzakt.default
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
            addTranzakt()
        } catch {
            errstack = errstack + 1, console.error(err.stack), console.log(`\nERRORSTACK>\n${errstack}\n<ERRORSTACK\n`) //%sean322
        }
    } else if (req.method === 'GET') {
        let getTranzakt = () => {
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
        getTranzakt()
    }
}