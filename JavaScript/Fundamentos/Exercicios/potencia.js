//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function potencia(base, expoente){
    if (!isNaN(base && expoente)){
        console.log(Math.pow(base, expoente))
    }
    else{
        console.log("Entradas Inválidas! Verificar os parametros")
    }
}

const potenciacao = (base, expoente) => {
    if (!isNaN(base && expoente)){
        console.log(Math.pow(base, expoente))
    }
    else{
        console.log("Entradas Inválidas! Verificar os parametros")
    }
} 

//potencia(10,'2') True
//potencia(10,2) True
//potencia(10, 'teste') False