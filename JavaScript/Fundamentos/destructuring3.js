function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min//Calculo
    return Math.floor(valor)//Math.floor arredonda pra baixo
}

const obj = {max:50, min:40}
console.log(rand(obj))//Retorna o valor de acordo com os parametros de obj
console.log(rand({min:955}))//Passando apenas o min
console.log(rand({}))//Pega os calores padrão
 