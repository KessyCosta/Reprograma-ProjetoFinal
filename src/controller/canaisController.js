const CanaisModel = require('../model/canaisModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

//POST -> cadastrar um canal
const cadastraCanal = async (req, res) => {
    try {
        const { canal, youtuber, assunto, descrição, endereço } = req.body

        const newCanal = new CanaisModel({
            canal, youtuber, assunto, descrição, endereço
        })
        const savedCanal = await newCanal.save()

        res.status(201).json([{
            "Mais um canal maravilhoso, de uma Deva maravilhosa, pra você, maravilhosa!": savedCanal
        }])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}

// GET -> listar os canais de youtube cadastrados de mulheres da tecnologia
const findAllchannels = async (req, res) => {
    try {
        const allChannels = await CanaisModel.find()
            res.status(200).json([{ 
            "Todos esse canais feitos por mulheres pra te mostrar que sim, se você quiser você também pode, então se joga!!": allChannels
         }])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}

//GET -> buscar canal por id
const findChannelById = async (req, res) => {
    try {
        const findChannel = await CanaisModel.findById(req.params.id)
        res.status(200).json([{ "Ta aí o canal maravilhoso que você pediu, agora aproveita mulher!":
        findChannel}])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}

//PATCH -> atualiza um dado do curso buscando pelo id
const updateChannel = async (req, res) => {
    try {
        
      const authHeader = req.get('authorization')
      if(!authHeader) {
        return res.status(401).send('Você precisa de uma autorização pra ter esse acesso.')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {
        
        if (erro) {
          return res.status(403).json('Não deu certo!')
        }
          
      })
        
        const { canal, youtuber, assunto, descrição, endereço } = req.body
        await CanaisModel.findByIdAndUpdate(req.params.id, {
            canal, youtuber, assunto, descrição, endereço  
        })
        
        const canalUpdated = await CanaisModel.findById(req.params.id)
            res.status(200).json([{ 
            "messagem": "Atualizado com sucesso!", 
            canalUpdated
        }])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor"})
    }
}


//DELETE -> deletar um canal
const deleteCanal = async (req, res) => {
    try {

     const authHeader = req.get('authorization')
      if(!authHeader) {
        return res.status(401).send('Você precisa de uma autorização pra ter esse acesso.')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {
        
        if (erro) {
          return res.status(403).json('Não deu certo!')
        }
          
      })

        const { id } = req.params
        await CanaisModel.findByIdAndDelete(id)
        const message = `O canal com o id ${id} foi deletado com sucesso.`
        res.status(200).json({ message })
    
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}

module.exports = {
    cadastraCanal, 
    findAllchannels,
    findChannelById,
    updateChannel,
    deleteCanal
}