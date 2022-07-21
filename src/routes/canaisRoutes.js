const controller = require('../controller/canaisController')
const express = require('express')

const router = express.Router()

router.post('/canal', controller.cadastraCanal)
router.get('/canais', controller.findAllchannels)

module.exports = router