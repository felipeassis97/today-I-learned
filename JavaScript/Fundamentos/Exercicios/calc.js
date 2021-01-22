/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores*/

function realizarOperacao(num1, num2){

    console.log(`Soma: ${num1+num2}`)
    console.log(`Subtração: ${num1-num2}`)
    console.log(`Multiplicação: ${num1*num2}`)
    console.log(`Divisão: ${num1/num2}`)
    
}

const operacao = (num1,num2) => console.log(`Soma: ${num1+num2}`)

realizarOperacao(1,5)
operacao(1,10)