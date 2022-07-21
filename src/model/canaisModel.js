const mongoose =  require('mongoose')

const canaisSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome:{type: String, required: true},
        youtuber:{type: String},
        endereço:{type: String, required:true}
    }
)

const Model = mongoose.model('canais', canaisSchema)

module.exports = Model