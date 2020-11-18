function somar(num1,num2){
    var resultado = num1+num2;
    return resultado;
}

var resultadoSoma = somar(1,2);
console.log(resultadoSoma);

/******************************************************/

function retornaSexo(sexo){
    //M ou F
    if (sexo == 'M' || sexo =='m'){
        return 'Masculino';

    }
    else if (sexo == 'F' || sexo =='f'){
        return 'Feminino';
    }
    else {
        return 'Parametro inválido!'
    }
   
}

function usandoCase(sexo){
    //M ou F
    switch(sexo){
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Parametro inválido!'
    }
   
}

var resultadoSexo = usandoCase('M');
console.log(resultadoSexo);