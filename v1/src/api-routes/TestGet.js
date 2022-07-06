const express = require('express')
const router = express.Router()
const { test } = require('../controllers/TestGetController')

router.route('/test').get(test)

module.exports = router
