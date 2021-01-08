const express = require ('express');
const app = express();
const morgan = require('morgan'); 

app.use(morgan('dev'));

const rotaProdutos = require('./routes/produtos');
app.use('/produtos', rotaProdutos);
//rota de pedidos node
const rotaPedidos = require ('./routes/pedidos');
app.use('/pedidos', rotaPedidos);



module.exports = app;