const EventEmmitter = require("events");
const htpp = require("http");

const myEmitter = new EventEmmitter(); //Instanciei o objeto EventEmmitter

//Criando os meus próprios eventos 
myEmitter.on("newSales", ()=>{ //Apenas executando o evento newSales // É a mesma lógica do uso de funções 
    console.log("Houve uma venda!")
})

myEmitter.on("newSales", ()=>{
    console.log("O consumidor é: Adrier")
})

myEmitter.on("newSales", quantidade =>{
    console.log(`Ele comprou um total de ${quantidade} itens`)
})

myEmitter.emit("newSales",21); //função para simular o clique / criar um evento 

//////////////////////////////////////////////////////////////////////////////

//Ouvindo os eventos que estão criados no Server

const server = htpp.createServer();

server.on("request", (req,res)=>{
    console.log("A requisição foi recebida!");
    res.end("A requisição foi recebida");
    console.log(req.url);

})


server.on("request", (req,res) =>{
    console.log("\nMais uma requisição 😎");
})


server.on("close", () =>{
    console.log("Fechando o servidor 🔒")
})



const teste = server.listen(8080, '127.0.0.1', () =>{
    console.log("Enviando requicoes")
});

// console.log(teste)