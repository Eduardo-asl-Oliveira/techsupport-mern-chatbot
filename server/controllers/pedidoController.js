const { response } = require('express');
const Pedido = require('../models/Pedido');



exports.criarPedido = async (req,res) => {
    try{
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.send("pedido armazenado")
    }catch(Erro){
        res.status(500).send("erro ao armazenar pedido");
    }
};

exports.getPedido = async (req,res) => {
    try{
        res.send( await Pedido.find());
    }catch(erro){
        res.status(500).json({mensagem: "erro ao buscar lista de pedidos no banco de dados"});
    }
    
}

exports.deletePedido = async(req,res) => {
    try{
        const id = req.params.id;
        await Pedido.findByIdAndDelete(id);
        res.send("pedido deletado com sucesso!");
    }catch(erro){
        res.status(500).json({mensagem: "erro ao deletar o pedido"});
    }
}

exports.updatePedido = async(req,res) => {
    try{
        const id = req.params.id;
        const dados = req.body;
        const pedidoAtualizado = await Pedido.findByIdAndUpdate(id,dados, {new:true});
        res.status(200).json({
            mensagem: "Pedido atualizado com sucesso!",
            pedido: pedidoAtualizado
        });
    }catch (erro) {
        res.status(500).json({ mensagem: "Erro ao atualizar o pedido." });
    }
} 