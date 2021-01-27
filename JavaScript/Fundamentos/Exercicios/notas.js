/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const conceito = (Array) =>{
    
    for (let i=1; i<= Array.length; i++){
        if (Array[i] >=0 && Array[i] <= 4.9){
            console.log(`Nota: ${Array[i]} - Conceito D`)
        }
        else if(Array[i] >= 5 && Array[i] <= 6.9){
            console.log(`Nota: ${Array[i]} - Conceito C`)
        }
        else if(Array[i] >= 7 && Array[i] <= 8,9){
            console.log(`Nota: ${Array[i]} - Conceito B`)
        }
        else if(Array[i] >= 9 && Array[i] <= 10){
            console.log(`Nota: ${Array[i]} - Conceito A`)
        }
        else{
            console.log("Parâmetro Inválido!")
        }
    }
}

const notas = [10,9,8.9,7,6.9,5,4.9,0]
conceito(notas)