const CursosModel = require('../model/cursosModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

//POST -> cadastra cursos de programação feito por mulheres
const cadastraCurso = async (req, res) => {
  try {
    const { curso, assunto, professora, numeroAulas, endereco } = req.body;

    const newCurso = new CursosModel({
      curso,
      assunto,
      professora,
      numeroAulas,
      endereco,
    });
    const savedCurso = await newCurso.save();

    res
      .status(201)
      .json([
        {
          "Mais um curso lindo feito por uma mulher pra você, mulher, cadastrado com sucesso!":
            savedCurso,
        },
      ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};


//GET -> lista todos os cursos de tecnologia cadastrados
const findAllcursos = async (req, res) => {
  try {
    const allCursos = await CursosModel.find();
    res.status(200).json([
        {
          "Todos os cursos de tecnologia, feito por mulheres, especialmente pra gente diminuir esse gap de gênero. Escolhe o seu e bora estudar!":
            allCursos,
        },
      ]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

//GET -> buscar curso por id
const findCursoById = async (req, res) => {
  try {
    const findCurso = await CursosModel.findById(req.params.id);
    res.status(200).json([
        {
          "Tá aqui o curso que você estava buscando, se joga, foi feito pra você, mulher!!":
            findCurso,
        },
      ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};


//PATCH -> atualiza um item do curso buscando pelo id
const updateCurso = async (req, res) => {
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
        
        const { curso, assunto, professora, numeroAulas, endereço } = req.body
        await CursosModel.findByIdAndUpdate(req.params.id, {
            curso, assunto, professora, numeroAulas, endereço
        })
        
        const cursoUpdated = await CursosModel.findById(req.params.id)
        res.status(200).json([{ 
            "messagem": "Atualizado com sucesso!", 
            cursoUpdated
        }])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}


//DELETE -> deleta curso buscando pelo id
const deleteCurso = async (req, res) => {
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
        await CursosModel.findByIdAndDelete(id)
        const message = `O curso com o id ${id} foi deletado com sucesso.`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro no servidor" })
    }
}

module.exports = {
    cadastraCurso,
    findAllcursos,
    findCursoById,
    updateCurso,
    deleteCurso
}