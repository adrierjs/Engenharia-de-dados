/*Crie um objeto para armazenar dados de uma pessoa */


function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade 
}

function Aluno(Pessoa, matricula){
    this.pessoa = Pessoa
    this.matricula = matricula
}


var p1 = new Pessoa("Adrier","José",20)

var a1 = new Aluno(p1, "@02020")

array = [p1,a1]

console.log(array[0])
console.log(array[1])

