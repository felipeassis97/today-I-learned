const dados = [
    {nome: "Felipe", sobrenome: "Assis"},
    {nome: "João", sobrenome: "Silva"},
    {nome: "Carlos", sobrenome: "Santos"}
]

const inverte = info =>[info.nome, info.sobrenome] = [info.sobrenome, info.nome]
    
const resultado = dados.map(inverte)
console.log(resultado)

