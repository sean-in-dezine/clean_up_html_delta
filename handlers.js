exports.handlers = (() => {
    console.log('handlers connected'.brightMagenta)
})


exports.alpha = (req, res, next) => {
    new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            res.send('whoops, u mean 2 do that?')
        } else if (req.method === 'POST') {
            // your logic goes here
            // console.log('something')
            console.log('post stuff here')
            res.send('post')

        } else {
            res.json({
                sucess: false
            })
        }
    }).catch(err => console.log(err))
}