const Customer = require('../models/customer.model')
const httpStatus = require('http-status')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.create = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email })
    if (customer) {
      return res.status(httpStatus.CONFLICT).send('Email  Already exists!!')
    } else {
      const prevCus = await Customer.find({})
        .sort({ cusNumber: -1 })
        .limit(1)
        .select('cusNumber')
      console.log(prevCus)
      if (prevCus.length === 0) {
        cusNumber = 0
      } else {
        cusNumber = prevCus[0].cusNumber
      }
      console.log(cusNumber)
      const customer = new Customer({
        cusNumber: cusNumber + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
      })

      await customer.save()
      // const newCustomer = await Customer.findOne({ email: req.body.email })
      // const cart = new Cart({
      //   customerID: newCustomer.id,
      //   customerEmail: newCustomer.email,
      // })
      // await cart.save()

      return res.status(httpStatus.CREATED).json({ customer })
    }
  } catch (error) {
    next(error)
  }
}

//customers data view him self
exports.self = async (req, res, next) => {
  // console.log('ll');
  try {
    const id = req.user.customerID
    const customer = await Customer.findById(id)
      .where('status')
      .equals('active')
      .select('firstName lastName email address phoneNumber')
    // console.log('pp',customer);
    if (!customer) {
      throw Error('User not found!!')
    }
    return res.status(httpStatus.OK).json({ customer })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  console.log(req.body)
  try {
    const customer = await Customer.findOne({ email: req.body.email })
      .where('status')
      .equals('active')
    const secret = process.env.secret
    if (!customer) {
      return res.status(httpStatus.NOT_FOUND).send('customer not found!!')
    }
    if (customer && bcrypt.compareSync(req.body.password, customer.password)) {
      const token = jwt.sign(
        {
          customerID: customer._id,
        },
        secret,
        { expiresIn: '1d' },
      )

      return res
        .status(httpStatus.OK)
        .send({ customer: customer, token: token })
    } else {
      return res.status(httpStatus.NOT_FOUND).send('Password is wrong!')
    }
  } catch (error) {
    next(error)
  }
}
