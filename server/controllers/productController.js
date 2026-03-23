const { response } = require('express');
const Product = require('../models/Product');



exports.criarProduct = async (req,res) => {
    try{
        const produto = new Product(req.body);
        await produto.save();
        res.send("produto armazenado")
    }catch(Erro){
        res.status(500).send("erro ao armazenar produto");
    }
};

exports.getProduct = async (req,res) => {
    try{
        res.send( await Product.find());
    }catch(erro){
        res.status(500).json({mensagem: "erro ao buscar lista de produto no banco de dados"});
    }
    
}

exports.deleteProduct = async(req,res) => {
    try{
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.send("produto deletado com sucesso!");
    }catch(erro){
        res.status(500).json({mensagem: "erro ao deletar o produto"});
    }
}

exports.updateProduct = async(req,res) => {
    try{
        const id = req.params.id;
        const dados = req.body;
        const produtoAtualizado = await Product.findByIdAndUpdate(id,dados, {new:true});
        res.status(200).json({
            mensagem: "produto atualizado com sucesso!",
            pedido: produtoAtualizado
        });
    }catch (erro) {
        res.status(500).json({ mensagem: "Erro ao atualizar o produto." });
    }
} 

