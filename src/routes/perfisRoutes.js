const controller = require('../controller/perfisController')
const express = require('express')

const router = express.Router()

router.post('/perfil/adicionar', controller.cadastraPerfil)
router.get('/perfis', controller.findAllProfiles)
router.get('/perfis/:id', controller.findProfileById)
router.patch('/perfil/:id', controller.updateProfile)
router.all('/perfil/:id', controller.deleteProfile)

module.exports = router