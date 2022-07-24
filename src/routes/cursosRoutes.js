const controller = require('../controller/cursosController')
const express = require('express')

const router = express.Router()

router.post('/maisDevas/curso/adicionar', controller.cadastraCurso)
router.get('/maisDevas/cursos', controller.findAllcursos)
router.get('/maisDevas/cursos/:id', controller.findCursoById)
router.patch('/maisDevas/curso/:id', controller.updateCurso)
router.delete('/maisDevas/curso/:id', controller.deleteCurso)

module.exports = router