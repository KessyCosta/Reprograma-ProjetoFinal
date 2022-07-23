const controller = require('../controller/canaisController')
const express = require('express')

const router = express.Router()

router.post('/canal/adicionar', controller.cadastraCanal)
router.get('/canais', controller.findAllchannels)
router.get('/canais/:id', controller.findChannelById)
router.patch('/canal/:id', controller.updateChannel)
router.delete('/canal/:id',controller.deleteCanal)

module.exports = router