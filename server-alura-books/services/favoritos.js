const fs = require('fs');

function getTodosLivrosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function getLivroFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));

    const favoritoFiltrado = favoritos.filter(favorito => favorito.id === id)[0]
    return favoritoFiltrado;
}

function inserirLivroFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));

    const novoFavorito = livros.find(livro => livro.id === id)
    
    const novaListaFavoritos = [...favoritos, novoFavorito]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

function removerLivroFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));

    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id)

    fs.writeFileSync('favoritos.json', JSON.stringify(favoritosFiltrados))
}


module.exports = {
    getTodosLivrosFavoritos,
    getLivroFavoritoPorId,
    inserirLivroFavorito,
    removerLivroFavoritoPorId
}