const fs = require("fs");


setTimeout(() => console.log("Timer 1 finalizado"));
setImmediate(() => console.log("Imediato 1 finalizado"))


fs.readFile(("test.file.txt"), () => {
    setTimeout(() => console.log("Timer 2 finalizado"))
    setTimeout(() => console.log("Time 3 finalizado"), 3000)
    setImmediate(() => console.log("Imediato 2 finalizado"))

    process.nextTick(()=> {
        console.log("Nextick imediate")
        setTimeout(() => console.log("Timeout dentro do nextick"))
        
    })
})

console.log("Iniciando")