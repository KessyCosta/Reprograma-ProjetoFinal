//Swagger é a criação da documentação
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js'];
swaggerAutogen(outputFile, endpointsFiles);


//npm run swagger-autogen
//usa npm start, depois esse comando de cima para rodar no terminal o swagger para gerar a documentação antes de abrir o navegador
//no navegador, no site do swagger:localhost:2022/documentacao