Array.prototype.filter2 = function(callback){
    newArray = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pró', preco: 4199, fragil: false},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]


const caro = produtos => produtos.preco >=500
const fragil = produtos => produtos.fragil === true


const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)