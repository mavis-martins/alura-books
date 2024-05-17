const fs = require('fs');

function getTodosOsLivros(){
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado;
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync('livros.json'));

    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosOsLivros,
    getLivroPorId,
    insereLivro
}