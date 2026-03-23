const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    preco:{
        type:  Number,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Product', ProductSchema);