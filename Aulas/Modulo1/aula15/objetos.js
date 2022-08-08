let array = [1,2,3]
array.push(4)
array[0] = "Luiz"
console.log(array)

//OBJETO

const pessoa1 = {
     nome: "igor",
     SobreNome: "ramalho",
     idade: 24
}

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.SobreNome)


function CriarPessoa(Nome, sobreNome, Idade){
    return{
        Nome: Nome,
        sobreNome: sobreNome,
        Idade: Idade
    }
}

const pessoa2 = CriarPessoa("igor",'ramalho', 24)
console.log(pessoa2.Nome)


const pessoa3 = {
    nome: "igor",
    SobreNome: "ramalho",
    idade: 24,

    fala(){
        console.log(`${this.nome} ${this.SobreNome} esta falado oi`)
        console.log(`A minha idade atual e ${this.idade}`)
    },

    incrementaIdade(){
        ++this.idade;
    }
}

console.log(pessoa3.fala())
console.log(pessoa3.incrementaIdade ())
console.log(pessoa3.fala())

