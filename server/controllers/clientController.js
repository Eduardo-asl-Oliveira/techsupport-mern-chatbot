const Client = require('../models/Client');


exports.criarClient = async (req,res) => {
    try{
        const client = new Client(req.body);
        await client.save();
        res.status(200).json({mensagem:"Cliente salvo!"});
    }catch(erro){
        res.status(500).json({mensagem:"erro ao criar cliente"});
    }
}

exports.getClient = async (req,res) => {
    try{
        res.status(200).send( await Client.find());
    }catch(erro){
        res.status(500).send({mensagem:"erro ao obter clientes"});
    }
}

exports.deleteClient = async (req,res) => {
    try{
        const id = req.params.id;
        await Client.findByIdAndDelete(id);
        res.status(200).json({mensagem:"cliente deletado com sucesso!"});
    }catch(erro){
        res.status(500).json({mensagem:"erro ao remover cliente!"});
    }
}

exports.updateClient = async (req,res) => {
    try{
        const id = req.params.id;
        await Client.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({mensagem:"Mudancas salvas com sucesso!"});
    }catch(erro){
        res.status(500).json({mensagem: "erro ao mudar os dados do cliente!"});
    }
}