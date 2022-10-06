class Medico{
    constructor(nome, especialidade, crm){
        this.nome = nome;
        this.especialidade = especialidade;
        this.crm = crm;

    }

    imprime(){
        console.log("\nMédico:", this.nome+
        "\nEspecialidade:", this.especialidade+
        "\nCRM: ", this.crm);
    }

}

class Paciente{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    imprime(){
        return this.nome + "\n"+ this.idade;
    }
}



m1 = new Medico("José","Generalista","20200");
p1 = new Paciente("Adrier",20)
console.log(p1.imprime())