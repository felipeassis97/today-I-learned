/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/


const intervalo = (Array) => {
    let intervalo1 = [] 
    let intervalo2 = []
    let qtdInt1 = 0
    let qtdInt2 = 0
    for (i=0; i<=Array.length; i++){
        if (Array[i] >=10 && Array[i] <=20){
            qtdInt1++
            intervalo1.push(Array[i])
        }
        else{
            qtdInt2++
            intervalo2.push(Array[i])
        }

    }

    console.log(`Array recebido: ${Array}`)
    console.log(`Quantidade intervalo 1: ${qtdInt1}`)
    console.log(`Lista intervalo 1: ${intervalo1}`)
    console.log(`Quantidade intervalo 2: ${qtdInt2}`)
    console.log(`Lista intervalo 2: ${intervalo2}`)
}

const lista = [10, 4 ,38 ,67 ,-9 ,11]
intervalo(lista)