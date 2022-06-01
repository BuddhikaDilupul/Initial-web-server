const express = require('express')
const router = express.Router()
const { validate } = require('express-validation')
const customerValidation = require('../../validations/customer.validation')
const customerController = require('../../controllers/customer.controller')

router.post('/', validate(customerValidation.create), customerController.create)

router.post(
  '/login',
  validate(customerValidation.login),
  customerController.login,
)

router.get('/', customerController.self)

module.exports = router
