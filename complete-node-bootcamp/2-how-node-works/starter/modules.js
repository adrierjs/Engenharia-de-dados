// Module.export
const calculadora = require('./test-modules1');

const c1 = new calculadora();

console.log(c1.soma(20, 30));

//Exports

const {adicao, divisao, multi} = require('./test-modules2'); //O que fiz aqui foi basicamente fragmentar o objeto 

console.log(adicao(20,20))

// Casching - CHamando a função sem atribuir o require a uma variável 
require('./test-modules3')();
require('./test-modules3')('Adrier');