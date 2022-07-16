const express = require('express') //importando o express
const swaggerUi = require('swagger-ui-express'); //conectando o swagger
const swaggerFile = require('../swagger/swagger_output.json'); //conectando o swagger


const app = express() //executa o express

app.use(express.json()) //uso o bodyparser
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile)); //rota para o swagger


const canaisRoutes = require('./routes/canaisRoutes')
//const cursosRoutes
//const perfisRoutes