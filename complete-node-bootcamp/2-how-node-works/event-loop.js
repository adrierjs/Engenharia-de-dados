const fs = require('fs');

// Essa execução está de forma síncrona
setTimeout(() => console.log("Primeiro a ser finalizado"), 0);
setTimeout(() => console.log("Primeiro a ser finalizado de forma imediata\n"));

fs.readFile(("test.file.txt"), () => {
    console.log("I/O finished");
    console.log("----------------------");

    setTimeout(() => console.log("Time 2 finalizado"), 0);
    setTimeout(() => console.log("Timer 3 finalizado"), 3000); //Quero que ele aguarde 3000 milisegundos para ser executado 
    setImmediate(() => console.log("Timer imediato")); //Ele será executado imediatamente porque usei o setImmediate

    process.nextTick(() => console.log("Executando o processo.nextTick")) // Ele executa primeiro porque é uma micro tarefa

})