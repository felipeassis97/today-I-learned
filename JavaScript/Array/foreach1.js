const aprovados = ['Aghata', 'Aldo', 'Felipe', 'Bruna']

aprovados.forEach(function (nome, indice){
    console.log(`${indice+1}: ${nome}`)//chama uma callback em cada laço do foreach passando o indice e o nome de aprovados como param
})

aprovados.forEach(nome=>console.log(nome))