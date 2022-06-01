const express = require('express')
const router = express.Router()

const { validate } = require('express-validation')
const staffValidation = require('../../validations/staff.validation')
const staffController = require('../../controllers/staff.controller')


router.post('/login', validate(staffValidation.login), staffController.login)
router.put('/reset', validate(staffValidation.reset), staffController.reset)
router.post('/resetPassword', staffController.resetPassword)
router.post('/', validate(staffValidation.create), staffController.create)

module.exports = router
