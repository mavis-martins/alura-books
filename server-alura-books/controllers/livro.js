const { 
    getTodosOsLivros,
    getLivroPorId,
    insereLivro
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

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        req.status(201)
        res.send('Livro inserido com sucesso!')
    } catch {
        res.status(500).send('Erro ao tentar acessar a rota de livros! 📚')
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro
}