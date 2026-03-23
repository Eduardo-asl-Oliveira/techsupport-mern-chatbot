const { GoogleGenerativeAI } = require('@google/generative-ai');
const Pedido = require('../models/Pedido'); 
const Product = require('../models/Product');




const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.responderCliente = async (req, res) => {
    try {
        const pergunta = req.body.pergunta;
        const listaDePedidos = await Pedido.find();
        const catalogoDeProduct = await Product.find();
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
        
        const prompt = `
            Você é um atendente virtual muito prestativo de um e-commerce de eletrônicos.

            [CATÁLOGO DE PRODUTOS DA LOJA]
            Estes são os produtos que nós vendemos atualmente:
            ${JSON.stringify(catalogoDeProdutos)}

            [SISTEMA DE PEDIDOS]
            Esta é a base de dados de compras dos clientes:
            ${JSON.stringify(listaDePedidos)}

            SUAS REGRAS DE ATENDIMENTO:
            1. Responda de forma amigável e direta.
            2. Se o cliente perguntar sobre o catálogo, preços ou estoque, use as informações do [CATÁLOGO DE PRODUTOS DA LOJA].
            3. Se o cliente perguntar sobre o status de uma compra, use o [SISTEMA DE PEDIDOS].
            4. Se o cliente perguntar algo que não está em nenhuma das duas listas, diga educadamente que você não tem essa informação no momento.

            Pergunta do cliente: "${pergunta}"
        `;
        const resultado = await model.generateContent(prompt);
        const respostaDaIA = resultado.response.text();
        res.status(200).json({ resposta: respostaDaIA });

    } catch (erro) {
        console.error("Erro no Chatbot:", erro);
        res.status(500).json({ mensagem: "O chatbot encontrou um erro." });
    }
};