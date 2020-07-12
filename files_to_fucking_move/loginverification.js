const log = console.log
exports.validation = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    if (email === undefined || email === '' || password === undefined || password === '') {
        return 'bad'
    } 
    next()

}

