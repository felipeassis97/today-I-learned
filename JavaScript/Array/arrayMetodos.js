const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.shift()//Remove o primeiro elemento do Array
pilotos.unshift('Hamilton')//Adiciona na primeira posição do Array
pilotos.pop()//Remove o ultimo elemento do Array
pilotos.push('Verstappen')//Adiciona um elemento no fim do Array

pilotos.splice(2,0, 'Botas', 'Massa')//Na posição 2, não deleta ngm e adiciona Botas e Massa
pilotos.splice(3,1) //A contar da posição 3, deleta 1

const algunsPilotos = pilotos.slice(2)//Cria um novo array a partir da posição passada no parametro
const algunsPilotos2 = pilotos.slice(1,4)//Vai gerar um array com o elemento até o 3... Pega o 1, mas não pega o 4

console.log(pilotos)
console.log(algunsPilotos)
console.log(algunsPilotos2)