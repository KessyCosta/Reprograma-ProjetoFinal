const Colaboradoras = require('../model/colaboradoraModel')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')


//POST -> criar usuário e senha
const create = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash;
    const colaboradora = await new Colaboradoras(req.body);

    colaboradora.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(colaboradora.toJSON())
    })
};

//POST -> criar login
const login = (req, res) => {
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
      if (!colaboradora) {
        return res.status(404).send(`Não existe colaboradora com esse email ${req.body.email}`)
      } 
      
      const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)

      if(!senhaValida) {
        return res.status(403).send('Sua senha é inválida.')
      }
      const token = jwt.sign({ email: req.body.email }, SECRET)
        res.status(200).send(token)

    })
}

// GET all - listar todos 
const getAll = (req, res) => {
  Colaboradoras.find(function (err, colaboradoras) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send(colaboradoras)
  })
}


// DELETE
const deleteById = async (req, res) => {
  try{
     const { id } = req.params
  await Colaboradoras.findByIdAndDelete(id)
  const message = `A colaboradora com o id ${id} foi deletada com sucesso!`
  res.status(200).json({ message}) 
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}

module.exports = {
    create,
    login,
    getAll,
    deleteById
}
