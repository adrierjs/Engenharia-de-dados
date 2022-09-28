/*Lembrar: em JS não tem tipo de varíavel e nem precisa atibuíla para inicializar*/

console.log("O número 1 é: ", num1+
"\nO número 2 é: ", num2);

/*Variável local*/
function varLocal(){
    let num = 0
    return num1
}

var num1, num2;
const num3 = 10;

num1 = prompt("Digite o número 1");
num2 = prompt("Digite o número 2");

console.log(varLocal());
