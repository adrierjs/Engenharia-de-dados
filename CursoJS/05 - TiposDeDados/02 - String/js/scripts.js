nome = prompt("Seu nome é:")
sobrenome = prompt("O seu sobrenome é:")



if(nome && sobrenome){
    nomeCompleto = nome + " " + sobrenome
    
    document.write("O seu nome é:  ", nomeCompleto)

}else{
    alert("Nenhum nome foi inserido!")
}


