const mongoose =  require('mongoose')

const cursosSchema = new mongoose.Schema(
    {
        id: {type: String},
        curso:{type: String, required: true},
        professora:{type: String},
        numeroAulas:{ type: Number},
        assunto:{ type: String},
        endereço:{type: String, required:true},
    }
)

const Model = mongoose.model('cursos', cursosSchema)

module.exports = Model