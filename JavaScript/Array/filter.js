const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pró', preco: 4199, fragil: false},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

/*function caro(produtos){
    return produtos.preco >2000
}*/

const caro = produtos => produtos.preco >=500
const fragil = produtos => produtos.fragil === true


const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)
