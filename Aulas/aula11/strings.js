let umaString = "um texto"
console.log(umaString)
console.log(umaString[0])
console.log(umaString[6])
console.log(umaString.charAt(5))// ele vai pegar alguma letra atravez de um vetor
console.log(umaString.concat(" num lindo dia")) //concatenar
console.log(umaString.indexOf('um')) // vai dizer o indece da palvra ou letra;
console.log(umaString.indexOf('t', 4)) //voce pode tambem achar o indice apartir de um determinado ponto
console.log(umaString.lastIndexOf('m',3))
console.log(umaString.match(/[a-z]/g)) //expressoes regulares
console.log(umaString.search(/x/g)) // vai procurar onde esta o indece
console.log(umaString.replace('um','Outro'))// vai substitui a palavra um para outa

let outraString = 'O rato roeu a roupa do rei de roma'
console.log(outraString.replace(/r/g, '#')) // vai pegar todos os r
console.log(outraString.length)// vai ver o tamanho da string
console.log(outraString.slice(2,5))
console.log(outraString.slice(-3))
console.log(outraString.slice(-5,-1))
console.log(outraString.substring(outraString.length - 5, outraString.length - 1))
console.log(outraString.split(' ', 2))
console.log(outraString.toUpperCase()) //tudo maiuculo
console.log(outraString.toLowerCase()) //tudo minusculo



