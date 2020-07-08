const asyncHandler = require('../../recycled_middleware/async');
// const ErrorResponse = require('../utils/errorResponse');

exports.getForm = (req, res) => {
    res.send('get form')
}
exports.postForm = (req, res) => {
    res.send('post form')
}
exports.viewForms = (req, res) => {
    res.send('view forms')
}
exports.manageForms = (req, res) => {
    res.send('manage forms')
}
exports.requestForm = (req, res) => {
    res.send('request form')
}
exports.addComment = (req, res) => {
    res.send('type loop in to add comment')
}
exports.addCommentForm = (req, res) => {
    res.send('based on form ID')
}

// router.get('/', getForm)
// router.post('/', postForm)
// router.get('/viewforms', viewForms)
// router.get('/manageforms', manageForms)
// router.get('/requestform', requestForm)
// router.get('/comment/add', addComment)
// router.get('/comment/add/form', addCommentForm)