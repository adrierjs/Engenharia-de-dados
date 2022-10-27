const http = require('http')


const server = http.createServer((req,res)=>{
    res.end('A pagina esta ok')
    

})



server.listen(8080,'127.0.0.1',()=>{
    console.log('Rodando na porta 8080')
})