/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/


const negativos = []
let qtd = 0

const percorre = (Array) =>{
    for (let i=0; i<=inteiros.length; i++){
        if (inteiros[i] < 0){
           qtd++
           negativos.push(inteiros[i])
        }
    }
    console.log(`Negativos: ${qtd}`)
    console.log(`Lista: ${negativos}`)
} 

const inteiros = [-10,-4,3,6,-8]
percorre(inteiros)