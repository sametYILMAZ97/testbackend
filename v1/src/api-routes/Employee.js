const express = require('express')
const router = express.Router()
const { test } = require('../controllers/EmployeeController')
const schemas = require('../validations/Employee')

router.route('/test').get(test)

module.exports = router
