const produtos2  = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pró', preco: 4199, fragil: false},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil === true

const result = produtos2.filter(caro).filter(fragil)
console.log(result)