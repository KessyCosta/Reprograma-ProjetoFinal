const express = require('express')
const router = express.Router()
const controller = require('../controller/colaboradorasController')

router.post('/maisDevas/colaboradoras/', controller.create)
router.post('/maisDevas/colaboradora/login', controller.login)
router.get('/maisDevas/busca/colaboradoras', controller.getAll)
router.delete('/maisDevas/colaboradoras/:id', controller.deleteById)

module.exports = router

