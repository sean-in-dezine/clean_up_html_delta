const express = require('express')
const app = express()
const path = require('path')

app.listen(3559, console.log('clean_up_html_ listening on port 3559'))

app.use(express.static(__dirname + '/'))

// const router = require('./routes.js')
// app.use(router)
app.get('/', (req, res, next) => {
    console.log(req.url, req.method)
    console.log(req.originalUrl, req.method)
    res.sendFile(__dirname + '/auth.html')
})
app.post('/', (req, res, next) => {
    console.log(req.url, req.method)
    console.log(req.originalUrl, req.method)
    res.json({
        success: 'true'
    })
})