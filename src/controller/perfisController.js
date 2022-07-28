const ProfileModel = require('../model/perfisModel')


//POST -> cadastra perfil de instagram de mulheres de incentivam outras mulheres
const cadastraPerfil = async (req, res) => {
  try {
    const { perfilInstagram, donaPerfil, endereco } = req.body;

    const newPerfil = new ProfileModel({
      perfilInstagram,
      donaPerfil,
      endereco,
    });
    const savedPerfil = await newPerfil.save();

    res.status(201).json([
      {
        "Mais um perfil inspirador na lista!": savedPerfil,
      },
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};


//GET -> lista os perfis de instagram de mulheres que incentivam outras a programar
const findAllProfiles = async (req, res) => {
  try {
    const allProfiles = await ProfileModel.find();
    res.status(200).json([
      {
        "Perfis do Instagram pra te inspirar e encorajar": allProfiles,
      },
    ]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

//GET -> buscar perfil do Instagram cadastrado por id
const findProfileById = async (req, res) => {
  try {
    const findProfile = await ProfileModel.findById(req.params.id);
    res.status(200).json([
      {
        "E que esse perfil te inspire...": findProfile,
      },
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};


//PATCH -> atualiza um dado(um item) do perfil buscando pelo id
const updateProfile = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização pra ter esse acesso.");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).json("Não deu certo!");
      }
    });
    const { perfilInstagram, donaPerfil, endereco } = req.body;
    await ProfileModel.findByIdAndUpdate(req.params.id, {
      perfilInstagram,
      donaPerfil,
      endereco,
    });

    const profileUpdated = await ProfileModel.findById(req.params.id);
    res.status(200).json([
      {
        messagem: "Atualizado com sucesso!",
        profileUpdated,
      },
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};


//DELETE -> deleta perfil de instagram cadastrado buscando por id
const deleteProfile = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização pra ter esse acesso.");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).json("Não deu certo!");
      }
    });

    const { id } = req.params;
    await ProfileModel.findByIdAndDelete(id);
    const message = `O perfil com o id ${id} foi deletado com sucesso.`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

module.exports = {
    cadastraPerfil,
    findAllProfiles, 
    findProfileById,
    updateProfile,
    deleteProfile
}