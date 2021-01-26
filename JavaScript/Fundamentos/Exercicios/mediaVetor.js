/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

const calcularMedia = (Array) => {
    let soma = 0
    let media = 0

    for (let i = 0; i<Array.length; i++){
        soma += Array[i]
        
    }
    console.log(`Tamanho da lista: ${Array.length}`)
    console.log(`Valor da soma: ${soma}`)
    media = soma/Array.length
    console.log(`Valor da Média: ${media}`)
}

const lista = [10,20,30]

calcularMedia(lista)