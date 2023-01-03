const EventEmmiter = require('events');
const htpp = require('http');
const fs = require('fs');

const MyEmmiter = new EventEmmiter();


// MyEmmiter.on('Teste', () => {
//     console.log("Executando o evento 1")
// })


// MyEmmiter.on('Teste', () => {
//     console.log("Executando o evento 2")
// })

// MyEmmiter.on('Soma', ((a, b) => {
//     console.log(`A soma de ${a}+${b} é: ${a+b}`)
// }))


// MyEmmiter.emit('Teste');
// MyEmmiter.emit('Soma', 10, 30)


const server = htpp.createServer(() => {
    console.log("Server criado com sucesso!")
})

server.on("request", (req, res) => {
    console.log("Request recebido!")
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
            console.log("Deu BO")
        } else {
            res.end(data)
        }


    })


})

server.listen(8080, '127.0.0.1', () => {
    console.log("Enviando request na porta 8080")
})