

const fatorial = (numero) => {
    let result = numero
 
    for (let i=numero; i >= 2; i--){
     
     result = (result * (numero-1))   
     numero--
    }
    console.log(`Resultado: ${result}`)
    
}

fatorial(6)