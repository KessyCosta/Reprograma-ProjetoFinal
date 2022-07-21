const app = require('./src/app') //chamando o arquivo app

const PORT = 2022

//iniciando o servidor
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))