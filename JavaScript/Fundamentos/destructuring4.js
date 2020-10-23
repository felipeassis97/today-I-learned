function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]//Invertendo as variaveis

    const valor = Math.random() * (max-min) + min //Calculo
    return Math.floor(valor) //Math.floor arredonda o valor pra baixo
}

console.log(rand([50,40]))//Passando o maximo e o minimo
console.log(rand([992]))//Passand apenas o minimo, e o maximo assume o padrão no caso 1000
console.log(rand([, 10]))//Passando apenas o máximo e o minimo assume o padrão no caso 0
console.log(rand([])) //Assume os valores padrão 0 e 1000