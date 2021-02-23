const carrinho = [
    '{"nome": "Borracha", "preco":"3.45"}',
    '{"nome": "Caderno", "preco":"13.90"}',
    '{"nome": "Lapis", "preco":"41.22"}',
    '{"nome": "Caneta", "preco":"7.50"}'
]

const paraObjeto = converte => JSON.parse(converte)
/*const paraObjeto = function converter (converte){
    return JSON.parse(converte)
}*/

const apenasPrecos = produto => produto.preco
/*const apenasPrecos = function produtos(produto){
    return produto.preco
}*/

const resultado = carrinho.map(paraObjeto).map(apenasPrecos)
console.log(resultado)

const exibirNome = nomes => console.log('Felipe')


setInterval(exibirNome, 2000)
