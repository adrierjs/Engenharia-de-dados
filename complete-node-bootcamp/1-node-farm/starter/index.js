const fs = require('fs')

// //Bloqueio síncrono - só executa uma linha por vez
// const textIn = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(`O texto de entrada foi: ${textIn}`)

// const textOut = (`Entrada: ${textIn} \nSaída: O texto de saída digitado por Adrier José, no dia: ${Date.now()}`)

// fs.writeFileSync('./txt/output.txt', textOut)


//Forma não bloqueadora, assíncrona.

fs.readFile(`./txt/start.txt`,'utf-8', (err,data) =>{ //ler o arquivo start.xt
    if(err) return console.log('Error! 💩') //se tiver erro na primeira função, ele para o código
    fs.readFile(`./txt/${data}.txt`,'utf-8', (err,data2) =>{ //o nome do arquivo start.txt executa o arquivo red-this.txt
        console.log(data2)
        fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) =>{ //o nome do arquivo start.txt executa o arquivo red-this.txt
            console.log('\n',data3)
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, err =>{
                console.log('Não houveram erros na gravação do arquivo, ele foi escrito normalmente!')
            })
        });
    });
});

console.log('Processando a operação')


