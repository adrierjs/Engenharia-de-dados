
var nome = "adrier"
var ascii = []
console.log(nome.toUpperCase())

for(let i = 0; i<nome.length; i++){
    ascii.push(nome.charCodeAt(i))

    
}

console.log(ascii)

//Remova todos os espaço desta frase

var frase = "Jardim do Seridó"

var frase2 = frase.split(" ")
console.log(frase2)

console.log(frase.lastIndexOf("Seridó"))