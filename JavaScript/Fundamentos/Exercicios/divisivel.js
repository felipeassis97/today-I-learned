/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const divisivel = (valor) => {
    const result = valor % 3
    
    if (result == 0){
        console.log("True")

    }else{
        console.log("False")
    }


}

divisivel(22)