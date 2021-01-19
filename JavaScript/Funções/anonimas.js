const soma = function(x,y){
    return x+y
}

const subtracao = function(x,y){
    return x-y
}

const imprimirSoma = function(a,b, operacao=soma){   //por padrão assume o terceiro param como soma   
    console.log(operacao(a,b))
}


imprimirSoma(3,4)//Assumindo soma como terceiro param
imprimirSoma(3,4, subtracao)//Passando outra func no param
imprimirSoma(3,4, function(x,y){ //Func direto na chamada
    return x*y
})
imprimirSoma(3,4, (x,y) => x/y)//Arrow direto na chamada
 