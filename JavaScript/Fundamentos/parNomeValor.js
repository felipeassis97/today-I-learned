const saudacao = 'opa' //contexto léxico 1 -> local fisico do projeto onde a variavel foi definida -> contexto

function exec(){
    const saudacao = 'Faaala' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade:32,
    peso: 90,
    endereco:{
        logradouro:'Rua 10',
        numero: 12
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)
