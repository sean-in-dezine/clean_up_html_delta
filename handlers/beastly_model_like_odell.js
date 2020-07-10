// ! create loop [block]
// *

function normalAddLoop(body) {
    let fnoffn = 'normalAddLoop(body)'
    console.log('running fn')
    console.log(body)

    let returnJson = {



        fnoffn: fnoffn,
        required_input: 'loopnumber, system',
        body: body
    }
    return returnJson

}
exports.loops = (req, res, next) => {
    let fnaxsd = 'exports.loops'

    if (req.method != undefined) {



        if (req.method === 'POST') {
            let body = req.body

            returnJson = normalAddLoop(body)

            res.json({
                returnJson,
                statuscode: res.statusCode,
                fnaxsd: fnaxsd,
            })


        } else if (req.method === 'GET')
            res.json({
                statuscode: res.statusCode,
                fnaxsd: fnaxsd,
                fnoffn: 'get Loop',
                required_input: 'loopnumber, system'
            })
    } else {
        res.json({
            reqmethod: req.method,
            successful: 'looks bad',
            fnaxsd: fnaxsd
        })
    }


}




// *
// ! /create loop [block]