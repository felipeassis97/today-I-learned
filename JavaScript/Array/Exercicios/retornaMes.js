const meses = [
    {mes: 1, nome: "Janeiro"},
    {mes: 2, nome: "Fevereiro"},
    {mes: 3, nome: "Março"},
    {mes: 4, nome: "Abril"},
    {mes: 5, nome: "Maio"},
    {mes: 6, nome: "Junho"},
    {mes: 7, nome: "Julho"},
    {mes: 8, nome: "Agosto"},
    {mes: 9, nome: "Setembro"},
    {mes: 10, nome: "Outubro"},
    {mes: 11, nome: "Novembro"},
    {mes: 12, nome: "Dezembro"}
]

const lista = function (meses){
   return  console.log(meses.mes)
}
const filtra = function (lista){
    return  console.log(lista.mes === mes)
 }

const resultado = meses.filter(lista).filter()
console.log(resultado)