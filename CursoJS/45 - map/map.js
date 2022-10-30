const array = [1,2,3,4,5,6]



const doubleNum = array.map(function(elem){
    return elem+2
})

function Teste(array){
    const elemento = []
    for (let index = 0; index < array.length; index++) {
        elemento[index] = array[index]+2

        
    }
    return elemento

}

console.log('Com map')
console.log(doubleNum)
console.log('Função normal')
console.log(Teste(array))


