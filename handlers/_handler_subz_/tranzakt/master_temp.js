exports.xfr_assign = (req, res, next) => {
    if (req.method === 'POST') {
        let addTranzakt = () => {
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
            addTranzakt()
        } catch {
            console.error(err.stack), console.log(`\nERRORSTACK>\n\n<ERRORSTACK\n`)
        }
    }
}


