const fs = require('fs');
const crypto = require('crypto'); //biblioteca para a encriptação de senhas

const start = Date.now(); // Varivável para pegar a data do sistema
process.env.UV_THEREADPOOL_SIZE = 3; //método usado para controlar quantos thedrs devem ser usados pelo o algoritmo

// Essa execução está de forma síncrona
setTimeout(() => console.log("Primeiro a ser finalizado"), 0);
setTimeout(() => console.log("Primeiro a ser finalizado de forma imediata\n"));

fs.readFile(("test.file.txt"), () => {
    console.log("\nE/S finished");
    console.log("----------------------");

    setTimeout(() => console.log("Time 2 finalizado"), 0);
    setTimeout(() => console.log("Timer 3 finalizado"), 3000); //Quero que ele aguarde 3000 milisegundos para ser executado 
    setImmediate(() => console.log("Timer imediato")); //Ele será executado imediatamente porque usei o setImmediate

    process.nextTick(() => console.log("Executando o processo.nextTick")) // Ele executa primeiro porque é uma micro tarefa

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => { //processo de criptografar senha
        console.log(Date.now() - start, "A senha foi criptografada")
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => { //processo de criptografar senha
        console.log(Date.now() - start, "A senha foi criptografada")
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => { //processo de criptografar senha
        console.log(Date.now() - start, "A senha foi criptografada")
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => { //processo de criptografar senha
        console.log(Date.now() - start, "A senha foi criptografada")
    })


})


console.log("Olá, seja bem vindo ao meu código") // É executado primeiro que todo mundo porque não requer nenhum timeout 