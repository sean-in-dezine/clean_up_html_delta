
exports.xfr_get = (req, res, next) => {
    console.log('/mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log')
    if (req.method === 'GET') {
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