const mongoose =  require('mongoose')

const perfisSchema = new mongoose.Schema(
    {
        id: {type: String},
        perfilInstagram:{type: String, required: true},
        dona:{type: String},
        endereço:{type: String, required:true},
    }
)

const Model = mongoose.model('perfis', perfisSchema)

module.exports = Model