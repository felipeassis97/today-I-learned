

Array.prototype.map3 = function (callback){
    const newArr = []
    for (let i=0; i<this.length; i++){
        newArr.push(callback(this[i], i, this)) 
    }
    return newArr
}
    
    
  

const carrinho2 = [
'{"nome": "Borracha", "preco": "3.45"}',
'{"nome": "Caderno", "preco": "13.90"}',
'{"nome": "Kit de Lápis", "preco": "41.22"}',
'{"nome": "Caneta", "preco": "7.50"}'
]

const obj = converter => JSON.parse(converter)

const preco = lista => lista.preco

const result =  carrinho2.map3(obj).map3(preco)
console.log(result)