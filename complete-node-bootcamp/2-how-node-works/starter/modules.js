// Module.export
const calculadora = require('./test-modules1');

const c1 = new calculadora();

console.log(c1.soma(20, 30));

//Exports

const c2 = require('./test-modules2');

console.log(c2.adicao(20,20))