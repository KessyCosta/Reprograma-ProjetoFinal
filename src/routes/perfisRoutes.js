const controller = require('../controller/perfisController')
const express = require('express')

const router = express.Router()

router.post('/maisDevas/perfilInstagram/adicionar', controller.cadastraPerfil)
router.get('/maisDevas/perfisInstagram', controller.findAllProfiles)
router.get('/maisDevas/perfisInstagram/:id', controller.findProfileById)
router.patch('/maisDevas/perfilInstagram/:id', controller.updateProfile)
router.all('/maisDevas/perfilInstagram/:id', controller.deleteProfile)

module.exports = router