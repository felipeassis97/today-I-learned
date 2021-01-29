
Array.prototype.forEach2 = function(callback){//Foreach é uma funão de array, por esse motivo precisamos extender o array com prototype
    for (let i=0; i<=this.length; i++){
        callback(this[i], i, this)//Valor atual, indice atual e array completo
    }
}

const aprovados = ['Aghata', 'Aldo', 'Felipe', 'Bruna']

aprovados.forEach2(function (nome, indice){
    console.log(`${indice+1}: ${nome}`)//chama uma callback em cada laço do foreach passando o indice e o nome de aprovados como param
})
