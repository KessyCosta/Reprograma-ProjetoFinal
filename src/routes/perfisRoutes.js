const controller = require('../controller/perfisController')
const express = require('express')

const router = express.Router()

router.get('/perfis', controller.findAllProfiles)

module.exports = router