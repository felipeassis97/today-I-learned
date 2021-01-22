/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao (dividendo, divisor){
    if(!isNaN(dividendo && divisor)){
        const divisao = dividendo / divisor
        console.log(`Divisao: ${divisao.toFixed(2)}`)
        console.log(`Resto: ${dividendo % divisor}`)
    }else{
        console.log("Entradas Inválidas! Verifique os parametros")
    }
}


const divisaoArrow = (dividendo, divisor) => {
    if(!isNaN(dividendo && divisor)){
        const divisao = dividendo / divisor
        console.log(`Divisao: ${divisao.toFixed(2)}`)
        console.log(`Resto: ${dividendo % divisor}`)
    }else{
        console.log("Entradas Inválidas! Verifique os parametros")
    }
}

//divisao(10,'!')
divisaoArrow(10,10)