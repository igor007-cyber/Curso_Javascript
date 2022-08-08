/* 
  Primitivos: String, number, boolean, undefined, null(bigint, symbol) 

  Referencia (mutavel) - array, object, function
*/

let nome = 'igor'
nome[0] = 'R'
console.log(nome[0],nome)

let a = [1,2,3]
let b = a
b[0] = 10
console.log(b,a)
a.push(4)
console.log(b,a)
b.pop()
console.log(b,a)

let c = [...a] // aqui foi só copiado, nao esta apontando como b esta apontando pra a
c.push(4)
console.log(b,a,c)

const x = {
    nome: 'igor',
    sobrenome: 'ramalho'
}
