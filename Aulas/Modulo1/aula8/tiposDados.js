//Tipos de dados primitivos

// String, Number, Undefine, null, boolean, symbol

const nome = 'igor' //string
const nome1 = `igor` //string
const nome2 = "igor" //string
const num = 10 //number
const num1 = 10.51 //number
let Nome // underfined --> nao aponta pra local nenhum na memoria;
let sobreNome = null // Nulo -> nao aponta pra local nenhum na memoria;
const aprovado = true; //booleano = true,false(logico)

console.log(nome, Nome, sobreNome, aprovado)

const a = [1,2]
const b = a

console.log(a,b)
b.push(3)
console.log(a,b)