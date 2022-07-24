const mongoose =  require('mongoose')

const perfisSchema = new mongoose.Schema(
    {
        id: {type: String},
        perfilInstagram:{type: String, required: true},
        donaPerfil:{type: String},
        endereco:{type: String, required:true},
    }, { versionKey : false }
)

const Model = mongoose.model('perfis', perfisSchema)

module.exports = Model