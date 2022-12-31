const EventEmitter = require("events");
myEmitter = new EventEmitter();

myEmitter.on("Soma", ()=>{
    console.log("Chamei a função soma")
})


myEmitter.on("Soma AB", (a,b) =>{

    console.log(`A soma de ${a}+${b} é: ${a+b}`)
})


myEmitter.emit("Soma");
myEmitter.emit("Soma AB",9,10)