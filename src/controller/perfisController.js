const PerfisModel = require('../model/perfisModel')


//GET -> lista os perfis de instagram de mulheres que incentivam outras a programar
const findAllProfiles = async (req, res) => {
    try {
        const allProfiles = await PerfisModel.find()
            res.status(200).json(allProfiles)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    findAllProfiles
}