const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { useEffect } = require('react');
require('dotenv').config(); //carrega o .env
const pedidoController = require('./controllers/pedidoController');
const clientController = require('./controllers/clientController');
const productController = require('./controllers/productController');



//INICIA O APLICATIVO EXPRESS
const app = express();


//CONFIGURA OS MIDDLEWARES
app.use(cors());
app.use(express.json());


//CONFIGURA O BANCO DE DADOS
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Conexão com o MongoDB estabelecida com sucesso!");
    })
    .catch(() => {
        console.error("Erro ao conectar o mongoDB" + erro.message);
    });


//DEFINE A PORTA
const PORT = process.env.PORT || 5000; //process: 


//POST PEDIDOS
app.post('/api/pedidos', pedidoController.criarPedido);

//GET PEDIDOS
app.get('/api/pedidos', pedidoController.getPedido);

//DELETE PEDIDOS
app.delete('/api/pedidos/:id', pedidoController.deletePedido);
 
//UPDATE PEDIDOS
app.put("/api/pedidos/:id", pedidoController.updatePedido);


//POST CLIENT
app.post('/api/client',clientController.criarPedido);

//GET CLIENT
app.get('/api/client', clientController.getClient);

//DELETE CLIENT
app.delete('api/client/:id', clientController.deleteClient);

//UPDATE CLIENT
app.put('/api/client/:id', clientController.updateClient);


//POST PRODUCT
app.post('/api/product',productController.criarProduct);

//GET PRODUCT
app.get('/api/product', productController.getProduct);

//DELETE PRODUCT
app.delete('api/product/:id', productController.deleteProduct);

//UPDATE PRODUCT
app.put('/api/product/:id', productController.updateProduct);


//POST CHAT
app.post('/api/chatBot', chatController.responderCliente);


//INICIA O SERVIDOR
app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT);
});