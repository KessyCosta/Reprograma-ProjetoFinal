const mongoose =  require('mongoose')

const canaisSchema = new mongoose.Schema(
    {
        id: {type: String},
        canal:{type: String, required: true},
        youtuber:{type: String},
        assunto: {type: String},
        descrição:{type: String},
        endereço:{type: String, required:true}
    } , { versionKey : false }
)

const Model = mongoose.model('canais', canaisSchema)

module.exports = Model