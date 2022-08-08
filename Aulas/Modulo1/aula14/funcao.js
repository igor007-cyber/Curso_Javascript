//FUNÇÃO
function saudacao(nome){
    return `Bom dia ${nome}` 
}

function soma(x,y){
    return x + y
}

const raiz = function(n){
    return n**5
};

const diminuir = (x,y) => {
    return x - y
}

const divisao = x => x/2


console.log(divisao(10))
console.log(diminuir(5,3))

console.log(raiz(2))

const variavel = saudacao("luiz");
const total = soma(2,2)
console.log(variavel);
console.log(total);