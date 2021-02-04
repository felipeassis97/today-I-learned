const alunos = [
    { nome:'João', nota:7.3, bolsista:false },
    { nome:'Maria', nota:9.2, bolsista:false },
    { nome:'Pedro', nota:9.8, bolsista:false },
    { nome:'Ana', nota:8.7, bolsista:false }

]
const notas = a =>a.nota
const somaNotas = (acumulador, atual) => acumulador + atual

//const todasNotas = alunos.map(notas).reduce(somaNotas)


const somaTudo = alunos.map(notas).reduce(somaNotas,0)//IniialValue é opcional... Caso não seja passado, é pegado os dois primeiros elementos do Array
console.log(somaTudo)

/*const todosBolsistas = function(resultado,bolsista){
    return resultado && bolsista
}*/
/*const listaBolsista = function(lista){
    return lista.bolsista
}*/

const todosBolsistas = (resultado,bolsista) =>  resultado && bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const listaBolsista = (lista) => lista.bolsista

const resultado = alunos.map(listaBolsista).reduce(algumBolsista)

//console.log(resultado)
