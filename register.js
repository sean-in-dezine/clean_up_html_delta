let log = console.log

const getRequestData = (req, res, next) => {
    log('get req data')
    return req.body
}


let data =  getRequestData


const registerValidate = (data) => {
    log('register validate', data)
    // return data
}
registerValidate(data)
// next()
module.exports = registerValidate
