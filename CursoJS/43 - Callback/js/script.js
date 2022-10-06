function exibir(num){
    console.log(`O resultado foi: ${num}`)

}

function multi(a,b, callback){
    var op = a*b
    callback(op) //chama a função exigir

}

function soma(a,b, callback){
    var op= a+b
    callback(op)//chama a função exigir
}


multi(20,10,exibir)
soma(20,10, exibir)




