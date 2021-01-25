/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
/*
const jurosSimples = (capital, taxa, tempo) => {

        const valorParcela = capital/tempo
        console.log(`Valor da parcela R$ ${valorParcela.toFixed(2)}`)

        console.log(`Quantidade de parcelas: ${tempo}`)

        const valorJuros = (taxa/100) * valorParcela
        console.log(`Valor da juros ao mês R$ ${valorJuros.toFixed(2)}`)

        const valorTotal = capital + (valorJuros * tempo)
        console.log(`Valor final R$ ${valorTotal.toFixed(2)}`)

}*/

const jurosCompostos = (capital, taxa, tempo) => {
    
    let valorParcela = capital/tempo
    
    let i = 0
    while(i<=tempo) {
        
    
        
        
        console.log("----------------------------------")
        console.log(`Mês: ${i+1}`)
        
        const valorJuros = valorParcela/taxa
        console.log(`Valor da parcela R$ ${valorParcela.toFixed(2)}`)
        
        console.log(`Valor Juros R$ ${valorJuros.toFixed(2)}`)
        valorParcela += valorJuros
        
        const valorTotal = capital+valorParcela
        console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
        
       i++
  
        }
    
}

jurosCompostos(100, 6, 5)