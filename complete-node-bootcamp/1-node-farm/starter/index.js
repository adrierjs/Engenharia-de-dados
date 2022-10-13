const fs = require('fs')

// //Bloqueio síncrono - só executa uma linha por vez
// const textIn = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(`O texto de entrada foi: ${textIn}`)

// const textOut = (`Entrada: ${textIn} \nSaída: O texto de saída digitado por Adrier José, no dia: ${Date.now()}`)

// fs.writeFileSync('./txt/output.txt', textOut)


//Bloqueio assíncrono (execução em segundo plano

fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data)
});
