/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const relatorio = []

const pontuacao = (pontos) => {
    relatorio.push(pontos)
    
    let maior = 0
    let menor = Infinity
    let recorde = 0

    for (let i=0; i<=relatorio.length; i++){
        


        if (relatorio[i] > maior){
            maior = relatorio[i]
            recorde++
        }
        if (relatorio[i] < menor){
            menor = relatorio[i]
        }

        
    }

    console.log(`Relatório geral: ${relatorio}`)
    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
    console.log(`Recordes: ${recorde}`)
    console.log("-----------------------")
    
}


pontuacao(16)
pontuacao(22)
pontuacao(4)
pontuacao(55)


