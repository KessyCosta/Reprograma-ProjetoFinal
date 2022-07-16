//Swagger é a criação da documentação
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles);


//npm run swagger-autogen
//usa esse comando para rodar no terminal o swagger