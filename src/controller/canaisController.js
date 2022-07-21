const CanaisModel = require('../model/canaisModel')


//POST -> cadastrar um canal
const cadastraCanal = async (req, res) => {
    try {
        const { nome, youtuber, endereço } = req.body

        const newCanal = new CanaisModel({
            nome, youtuber, endereço
        })
        const savedCanal = await newCanal.save()

        res.status(201).json(savedCanal)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message:error.message})
    }
}

// GET -> listar os canais de youtube cadastrados de mulheres da tecnologia
const findAllchannels = async (req, res) => {
    try {
        const allChannels = await CanaisModel.find()
            res.status(200).json(allChannels)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    findAllchannels, 
    cadastraCanal
}