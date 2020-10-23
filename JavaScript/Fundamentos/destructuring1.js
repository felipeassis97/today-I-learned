//Recurso introduzido no ES2015 
const pessoa = {
    nome: 'Felipe',
    idade: 23,
    endereco:{
        logradouro: 'Rua 10',
        numero: 100
    }
} 
const {nome,idade} = pessoa
console.log(nome,idade)//Pegar os valores de nome e idade da Função Pessoa

const {nome: n, idade: i} = pessoa
console.log(n,i)//Atribuir os valores de nome e idade para variaveis

const{endereco:{logradouro, numero}} = pessoa
console.log(logradouro,numero)//Acessar valores dentro de outros  