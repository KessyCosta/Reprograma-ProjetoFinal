const CursosModel = require('../model/cursosModel')


//GET -> lista todos os cursos de tecnologia cadastrados
const findAllcursos = async (req, res) => {
    try {
        const allCursos = await CursosModel.find()
            res.status(200).json(allCursos)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    findAllcursos
}