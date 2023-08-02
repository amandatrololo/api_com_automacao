const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao:{
        type: String,
        required: true
    },
    minibio:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('diva', MulherSchema)