const fs = require('fs')
const http = require('http')


const server = http.createServer((req,res)=>{
    const caminho = req.url
    if(caminho == '/home'){
         fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
            if(err) return console.log('Arquivo nao encontrado')
            fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data2)=>{
                res.end(data2)
            })
         })
         console.log("Abrindo arquivo")
    
    }else{
    res.writeHead(404) //mostra erro 404 no log
    res.end('<h1>Pagina nao encontrada<h1>')
    }
})


server.listen(8080,'127.0.0.1',()=>{
    console.log("O servidor está rodando")
})