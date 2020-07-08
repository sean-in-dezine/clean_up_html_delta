const express = require('express')
const router = express.Router()

const { getForm, postForm, viewForms, manageForms, requestForm, addComment, addCommentForm } = require('../controllers/forms')



router.get('/', getForm)
router.post('/', postForm)
router.get('/viewforms', viewForms)
router.get('/manageforms', manageForms)
router.get('/requestform', requestForm)
router.get('/comment/add', addComment)
router.get('/comment/add/form', addCommentForm)

module.exports = router