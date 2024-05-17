const { 
    getTodosOsLivros,
    getLivroPorId
} = require('../services/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosOsLivros() ;
        res.send(livros)
    } catch {
        res.status(500).send('Erro ao tentar acessar a rota de livros! 📚')
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch {
        res.status(500).send('Erro ao tentar acessar a rota de livros! 📚')
    }
}

module.exports = {
    getLivros,
    getLivro
}