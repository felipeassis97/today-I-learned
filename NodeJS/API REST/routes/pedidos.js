const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retornando os pedidos'
    });
}); 

//INSERE UM PEDIDO
router.post('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Inserindo um pedido'
    });
});

//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next)=>{
    const id = req.params.id_pedido;

        res.status(200).send({
            mensagem: 'Passando ID do pedido',
            id_pedido: id
        }); 
});


//EXCLUI UM PEDIDO
router.delete('/:id_pedido', (req, res, next)=>{
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: 'Excluindo pedido',
        id_pedido: id
    });
}); 


module.exports = router; 