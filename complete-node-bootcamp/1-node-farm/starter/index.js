const fs = require('fs')
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replateTemplate.js')
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


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')


//A vantagem de colocar o arquivo da API para executar logo no começo do código é o ganho de memória que é proporcionado por conta disso
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // ele já carregou o arquivo de forma síncrona, assim que ocorrer a primeira requisição da página

const dataObj = JSON.parse(data) //irá abrir o arquivo json e converter para um array que ficará armazenado na variável dataObj


const server = http.createServer((req, res) => {

    const {
        query,
        pathname
    } = (url.parse(req.url, true)) //esse método retorna uma query com todas as informações referente a URL que o usuário acessou e o pathname está o endereço com caminho naquela determinada requisição
    // const pathName = req.url //usei a função req.url para pegar o caminho que o usuário está 

    //Roteamento

    //Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'overview'
        });


        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(' ');
        const output = tempOverview.replace('{%PRODUTC_CARDS%}', cardsHtml);
        res.end(output);


        //Product page 
    } else if (pathname === '/product') { //Quando o cliente clica DETAIL, ele redireciona para a página de produto.
        res.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'product'
        });
        
        const product = dataObj[query.id];//a query.id retorna a posição do elemento no objeto
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        // API
    } else if (pathname === "/api") {
        // --------- Nesta forma aqui é menos eficiente, pois a cada execução do usuário a esse caminho, ele terá que novamente carregar o arquivo Json.
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data)=>{ //o __dirname é para executar em qualquer diretório atual, coloquei mais detalhes no curso da udemy
        //     const produtcData = JSON.parse(data) //comando para executar arquivo Json


        res.writeHead(200, {
            'Content-type': '/application/json',
            'my-header': 'API'
        });
        res.end('API');
    }

    //Not found
    else {
        res.writeHead(404, {
            'Tipo-de-conteudo': 'text/html',
            'my-heder': 'hello world!'
        }); //comando para mostrar o erro 404 - página não encontrada no console
        res.end('<h1>Pagina nao encontrada<h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Escutando na porta 8000")
});