const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    if (err) return console.log(err.message)
    console.log(`Breed: ${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
        if (err) return console.log(err.message);

        console.log(res.header.date);
        console.log(res.body.message);
        fs.writeFile('doc-img.txt', `Breed: ${data}\nImg: ${res.body.message}`, (err) => {
            if (err) console.log(err.message);
            console.log("Arquivo de texto gravado com sucesso!")
        })

    })
})