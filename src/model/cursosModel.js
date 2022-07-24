const mongoose =  require('mongoose')

const cursosSchema = new mongoose.Schema(
    {
        id: {type: String},
        curso:{type: String, required: true},
        assunto:{ type: String},
        professora:{type: String},
        numeroAulas:{ type: String},
        endereco:{type: String, required:true},
    }, { versionKey : false }
)

const Model = mongoose.model('cursos', cursosSchema)

module.exports = Model