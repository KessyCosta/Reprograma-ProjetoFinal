const controller = require('../controller/cursosController')
const express = require('express')

const router = express.Router()

router.get('/cursos', controller.findAllcursos)

module.exports = router