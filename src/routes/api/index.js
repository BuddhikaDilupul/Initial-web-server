const express = require('express')
const router = express.Router()

const staffRoute = require('./staff.route')
const customerRoute = require('./customer.route')
const authTokenRoute = require('./authToken.route')

router.use('/authToken', authTokenRoute)
router.use('/staff', staffRoute)
router.use('/customer', customerRoute)

module.exports = router
