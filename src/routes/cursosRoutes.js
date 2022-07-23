const controller = require('../controller/cursosController')
const express = require('express')

const router = express.Router()

router.post('/curso/adicionar', controller.cadastraCurso)
router.get('/cursos', controller.findAllcursos)
router.get('/cursos/:id', controller.findCursoById)
router.patch('/curso/:id', controller.updateCurso)
router.delete('/curso/:id', controller.deleteCurso)

module.exports = router