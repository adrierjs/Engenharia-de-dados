const fs = require('fs')
const http = require('http');
const { json } = require('stream/consumers');
//////////////////////////////////////////////////////////////////////////
///////FILES - Manipulação de arquivos de forma síncrona e assíncrona

// //Bloqueio síncrono - só executa uma linha por vez
// const textIn = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(`O texto de entrada foi: ${textIn}`)

// const textOut = (`Entrada: ${textIn} \nSaída: O texto de saída digitado por Adrier José, no dia: ${Date.now()}`)

// fs.writeFileSync('./txt/output.txt', textOut)


//Forma não bloqueadora, assíncrona.

// fs.readFile(`./txt/start.txt`,'utf-8', (err,data) =>{ //ler o arquivo start.xt
//     if(err) return console.log('Error! 💩') //se tiver erro na primeira função, ele irá parar a execução do código
//     fs.readFile(`./txt/${data}.txt`,'utf-8', (err,data2) =>{ //o nome do arquivo start.txt executa o arquivo red-this.txt
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) =>{ //o nome do arquivo start.txt executa o arquivo red-this.txt
//             console.log('\n',data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, err =>{
//                 console.log('Não houveram erros na gravação do arquivo, ele foi escrito normalmente!')
//             })
//         });
//     });
// });

// console.log('Processando a operação')


//////////////////////////////////////////////////////////////////////////
///////SERVER

//A vantagem de colocar o arquivo da API para executar logo no começo do código é o ganho de memória que é proporcionado por conta disso
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // ele já carregou o arquivo de forma síncrona, assim que ocorrer a primeira execução do código
const dataObj = JSON.parse(data) //comando para executar arquivo Json

const server = http.createServer((req,res)=>{
    const caminho = req.url 
    //Roteamento
    if(caminho === '/' || caminho ==='/home'){
        res.end('Bem vindo a pagina inicial do site')
    } else if(caminho === '/p2'){
        res.end('Segunda pagina')

    } else if(caminho === "/api"){
        // --------- Nesta forma aqui é menos eficiente, pois a cada execução do usuário a esse caminho, ele terá que novamente carregar o arquivo Json.
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data)=>{ //o __dirname é para executar em qualquer diretório atual, coloquei mais detalhes no curso da udemy
        //     const produtcData = JSON.parse(data) //comando para executar arquivo Json
            res.writeHead(200,{
                'Tipo-de-conteudo': '/application/json',
                'my-header':'API'
            })
            res.end(data)
        }

    else if(caminho === '/p3'){
        res.end('Terceira pagina')
    } else{
        res.writeHead(404,{
            'Tipo-de-conteudo': 'text/html',
            'my-heder' : 'hello world!'
        }) //comando para mostrar o erro 404 - página não encontrada no console
        res.end('<h1>Pagina nao encontrada<h1>')
    }
});

server.listen(8000,'127.0.0.1', ()=>{
    console.log("Escutando na porta 8000")
});




