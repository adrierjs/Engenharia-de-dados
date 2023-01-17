const fs = require('fs');



const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(`Erro de leitura`);
            resolve(data);

        })

    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Erro de gravação!');
            resolve("sucesso")
        })
    })
}


const abrirArquivo = async () => {
    try {
        const arquivo = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Arquivo ${arquivo}`)

    } catch { console.log(`Deu erro!`) }
}

const gravarArquivo = async () => {
    try {
        await writeFilePro(`test.txt`, );
        console.log('Gravado com sucesso!')

    } catch { console.log('Erro de gravação!') }
}

gravarArquivo();


abrirArquivo();