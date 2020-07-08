const checkCode = require('../middleware/checkCode')
const current_file = './handlers/search.js'

exports.cashSearch = (req, res, next) => {

    let code = checkCode(req, res, next)
    if (code === 'search') {
        console.log('code matches, handlers.js>register>post'.brightGreen, `[${current_file}]`.brightRed)

    }

    function runSearch() {

        let body = req.body
        res.json({
            body: "received",
            hereitis: body
        })
    }
    runSearch()

}