const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET na rota de produtos'
    });
}); 

//INSERE UM PRODUTO
router.post('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o POST na rota de produtos'
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next)=>{
    const id = req.params.id_produto;
    
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Passando ID secreto',
            id: id
        });
    }
    else{
        res.status(200).send({
            mensagem: 'Passando ID comum',
            id: id
        });
    }
    
});

//ALTERA UM PRODUTO
router.patch('/:id_produto', (req, res, next)=>{
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Usando o patch na rota de produtos'
    });
}); 

//EXCLUI UM PRODUTO
router.delete('/:id_produto', (req, res, next)=>{
    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: 'Usando o delete na rota de produtos'
    });
}); 


module.exports = router; 