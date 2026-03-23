const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    pedido:[{
        type: String,
        required: false
    }]
});

module.exports = mongoose.model('Client', ClientSchema);