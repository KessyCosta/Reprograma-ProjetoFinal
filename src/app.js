require('dotenv').config()
//imports
const express = require('express') //importando o express
const cors = require('cors')
const mongoose = require ('./database/mongooseConnect')
const canaisRoutes = require('./routes/canaisRoutes')
const cursosRoutes = require('./routes/cursosRoutes')
const perfisRoutes = require('./routes/perfisRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')
const index = require('./routes/index')
const swaggerUi = require('swagger-ui-express'); //conectando o swagger
const swaggerFile = require('../swagger/swagger_output.json'); //conectando o swagger


const app = express() //executa o express

app.use(express.json()) //body parse

app.use(cors()) //deixar a api pública

app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile)); //rota para o swagger

mongoose.connect() //concetar o banco

app.use('/', index)
app.use(canaisRoutes)
app.use(cursosRoutes)
app.use(perfisRoutes)
app.use(colaboradorasRoutes)

module.exports = app //exportando para usar o server