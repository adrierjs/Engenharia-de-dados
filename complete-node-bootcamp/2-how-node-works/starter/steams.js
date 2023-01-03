const server = require('http').createServer();
const fs = require('fs');


server.on("request", (req, res) =>{
    //Solução número 1 - Essa forma sobrecarraga a memória ram, pois todos os arquivos tem que ser carregados na memória para ser enviado para o navegador
    // fs.readFile('test-file.txt', 'utf-8', (err, data) =>{
    //     if(err) throw err;
    //     res.end(data);
    // })
    

    // Solução 2 - Esse método vai carregando o arquivo em partes com base na necessidade, por exemplo: Vídeo no youtube
    // const readable = fs.createReadStream('test-file.txt'); //Criação o arquivo legível em partes,
    // readable.on('data', pedaco =>{
    //     res.write(pedaco);
    // })
    // readable.on('end', () =>{ //Quando finalizar a leitura completa do arquivo
    //     res.end();
    // })

    // readable.on("error", err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("error");
    // });

    //Solução 3 - Irá resolver o problema dos dados demorarem para carregar por conta do disco do PC
    const readable = fs.createReadStream("test-file.txt"); //Essa é a solução mais prática e elegante, as demais acima devem ser utilizadas para soluções mais customizadas
    readable.pipe(res);
    
    
});

const porta = 8080;
server.listen(porta, '127.0.0.1', ()=> {
    console.log(`Enviando requests na porta ${porta}`)
})

