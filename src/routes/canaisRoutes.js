const controller = require('../controller/canaisController')
const express = require('express')

const router = express.Router()

router.post('/maisDevas/canal/adicionar', controller.cadastraCanal)
router.get('/maisDevas/canais', controller.findAllchannels)
router.get('/maisDevas/canais/:id', controller.findChannelById)
router.patch('/maisDevas/canal/:id', controller.updateChannel)
router.delete('/maisDevas/canal/:id',controller.deleteCanal)

module.exports = router