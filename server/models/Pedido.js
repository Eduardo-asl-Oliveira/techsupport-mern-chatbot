const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    numeroDoPedido:{
        type: Number,
        required: true
    },
    valorTotal:{
        type: Number,
        required: true
    },
    relatorioDoProblema:{
        type: String,
        required: false
    },
    data:{
        type: Date,
        default: Date.now
    },
    Status:{
        type: String,
        require: true,
        enum: ['FEITO', 'AUTORIZADO', 'A CAMINHO', 'ENTREGUE']
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);