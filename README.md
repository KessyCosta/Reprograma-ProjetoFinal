<h1 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
</h1>

<center><Logotipo mulheres lado a lado de braços cruzados de mãos dados, fundo rosa e letras de cor marrom e vermelha><img src="./IMG/MaisDevas.svg" alt="Mais Devas"></center>


Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/) 
<p align="center">

Aplicação disponível [aqui](https://mais-devas.herokuapp.com/) 😊 
<p>

--------------




## 💡 Objetivo 

Mesmo que a sociedade esteja avançando no quesito diversidade, nas carreiras da ciência, tecnologia, engenharia e matemática (Stem - sigla em inglês) as mulheres ainda são minoria. De acordo com a Organização das Nações Unidas (ONU), globalmente, elas representam apenas 35% dos estudantes matriculados nesses segmentos. 

Em tecnologia e nas engenharias de produção, civil e industrial, o percentual é ainda menor, chegando a 28% do total. Tendo em vista esse fatores, a Mais Devas foi criada objetivando diminuir o gap de gênero no setor de tecnologia através do incentivo à educação. 

Para isso, foi construída uma *API* com banco de dados de canais de youtube sobre qualquer área da tecnologia, cursos de tecnologia e perfis de Instagram que falem sobre tecnologia ou inspirem mulheres a estudarem tecnologia, todos feitos por mulheres, visando que mais mulheres se interessem por programação ou áreas afins da tecnolgia, encontrando nesse banco de dados informações que as incentive e as leve a canais, cursos e perfis que sejam locais seguros de inspiração e aprendizagem. 

-----------------
## 🔗 Link 

- [Apresentação](colar lind do canva)

<br>

-----------------


## ⚙️ Funcionalidades da aplicação

- ☑ O schema dos canais de youtube de tecnologia deve possuir os seguintes campos: id (autogerado), nome do canal, nome da youtuber, assunto, descrição e endereço do canal; 
- ☑ O schema dos cursos de tecnologia deve possuir os seguintes campos: id (autogerado), nome do curso, assunto do curso, professora, número de aulas e endereço curso;
- ☑ O schema dos perfis de Instagram deve possuir os seguintes campos: id (autogerado), nome do perfil, nome da dona do perfil, endereço do perfil;
- ☑ A API deve permitir o cadastro de canais de youtube sobre tecnologia, cursos de tecnologia e perfis de Instagram;
- ☑ A API deve permitir a visualização dos canais de youtube, cursos e perfis de Instagram cadastrados;
- ☑ A API deve permitir alterações nos canais, cursos e perfis;
- ☑ A API deve permitir a exclusão dos canais, dos cursos e dos pefis do banco de dados.
- ☑ Criação de usuário e login para a usuária com acesso busca e cadastro de canais, cursos e perfis;


-------------



## 🛠️ Tecnologias utilizadas

</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `npm install --save-exact jest@28.1.0 --save-dev`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| Hospeda a documentação.|

</br>

--------------

## **Arquitetura MVC** 
Arquitetura padrão da API:
```
  📁 MaisDevas
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 canaisController.js
   |         |- 📑 colaboradorasController.js
   |         |- 📑 cursosController.js
   |         |- 📑 perfisController.js
   |
   |    |- 📁 database
   |         |- 📑 mongooseConnect.js
   |    |- 📁 models
   |         |- 📑 canaisModel.js
   |         |- 📑 colaboradorasModel.js
   |         |- 📑 cursosModel.js
   |         |- 📑 perfisModel.js
   |    |- 📁 routes
   |         |- 📑 canaisRoutes.js
   |         |- 📑 colaboradorasRoutes.js
   |         |- 📑 cursosRoutes.js 
   |         |- 📑 indexRoutes.js
   |         |- 📑 perfisRoutes.js
   |
   |    |- 📑 app.js
   |
   |-  📁 swagger
   |    |- 📑 swagger_output.json
   |-  📁 test
   |    |- 📑 canais.test.js
   |    |- 📑 cursos.test.js
   |    |- 📑 perfis.test.js
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .eslintrc.json
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile  
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js
   ```


#### Rotas/Endpoints

<h2>🔃Rotas</h2>

* Local: http://localhost:2022 <br>
* Heroku: https://mais-devas.herokuapp.com/ <br>
 
  ▫ As rotas da API podem ser testadas através do [Postman](https://www.postman.com/)


<h3>🔃Rotas dos Canais de Youtube</h3>

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ----------------------------------------- |
| GET          | `/maisDevas/canais`         | Retorna todos os canais cadastrados               |
| GET          | `/maisDevas/canais/:id`      | Retorna um canal pelo id    |
| POST          | `/maisDevas/canal/adicionar`     | Cria/cadastra um novo canal de youtube        |
| POST       | `/maisDevas/canal/adicionar`      | Dar like em um profissional 
| PATCH          | `/maisDevas/canal/:id`      | Atualiza/Altera uma informação de um canal       |
| DELETE       | `/maisDevas/canal/:id`      | Remove  um canal de youtube   

<h3>🔃Rotas dos Cursos</h3>

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ----------------------------------------- |
| GET          | `/maisDevas/cursos`         | Retorna todos os cursos cadastrados               |
| GET          | `/maisDevas/cursos/:id`      | Retorna um curso pelo id    |
| POST          | `/maisDevas/curso/adicionar`     | Adiciona/cadastra um novo curso de tecnologia        |
| PATCH       | `/maisDevas/curso/:id`      | Atualiza/Altera uma informação de um curso 
| DELETE       | `/maisDevas/curso/:id`      | Remove  um curso  

<h3>🔃Rotas dos Perfis</h3>

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ----------------------------------------- |
| GET          | `/maisDevas/perfisInstagram`         | Retorna todos os perfis de Instagram cadastrados               |
| GET          | `/maisDevas/perfisInstagram/:id`      | Retorna um perfil de Instagram pelo id    |
| POST          | `/maisDevas/perfilInstagram/adicionar`     | Adiciona/cadastra um novo perfil de Instagram        |
| PATCH       | `/maisDevas/perfilInstagram/:id`      | Atualiza/Altera uma informação de um perfil de Instagram 
| DELETE       | `/maisDevas/perfilInstagram/:id`      | Remove  um perfil  

<br>


--------------

## 🚧 Implementações futuras

<br>

*  Implantação de código HTML e CSS para a criação de uma interface capaz de possibilitar a interação do usuário com a aplicação.
* Inserir mais canais, cursos e perfis no banco de dados.
* Criação de novas rotas para busca de canais, cursos ou perfis por assuntos.

<br>

----------

## 🚀 Instalação e contribuição para o projeto!

1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <https://github.com/KessyCosta/Reprograma-ProjetoFinal.git>`
3. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
4. Instale as dependências necessárias à execução da API através dos comandos
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install nodemon `
- `npm install mongoose `
- `npm i --save-dev dotenv`
- `npm install jsonwebtoken --save`
- `npm install bcrypt --save`
- `npm install --save-exact jest@28.1.0 --save-dev`
- Inicialize com o comando `npm start` para que você possa executar os testes localmente.
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
6. Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

---------

## 🎉Agradecimentos

<p align="justify">À todas as mulheres incríveis que fazem parte da Reprograma, a palavra que me define é <strong>GRATIDÃO</strong> pela oportunidade de vivenciar tudo isso e aprender muito além da programação 💜 e às devs da minha turma On16 de backend - muito sucesso, vocês merecem!🚀</p>


------------
### Criado com :purple_heart: por **Kessy Costa**

### Vamos nos conectar!

<a href="https://www.linkedin.com/in/kessy-costa/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/KessyCosta"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>

