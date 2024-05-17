const fs = require('fs');

const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'));

const novoDado = {
    id: '5',
    nome: 'Histórias Extraordinárias'
}

fs.writeFileSync('livros.json', JSON.stringify(
    [...dadosAtuais, novoDado ]
))

console.log(JSON.parse(fs.readFileSync('livros.json')));