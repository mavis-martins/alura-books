const { 
    getTodosOsLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removeLivroPorId
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

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            if(livro) {
                res.send(livro)
            } else {
                res.status(404)
                res.send('ID de livro inválido! 📚')
            }
        } else {
            res.status(422)
            res.send('ID de livro inválido! 📚')
        }
    } catch {
        res.status(500).send('Erro ao tentar acessar a rota de livros! 📚')
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso! 📚')
        } else {
            res.status(422)
            res.send('Nome do livro é obrigatório! 📚')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            const livro = getLivroPorId(id)
                if(livro) {
                    modificaLivro(body, id)
                    res.send('Livro modificado com sucesso! 📚')
                } else {
                    res.status(404)
                    res.send('ID de livro inválido! 📚')
                }
        } else {
            res.status(422)
            res.send('ID de livro inválido! 📚')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            if(livro) {
                removeLivroPorId(id)
                res.send('Livro removido com sucesso! 📚')
            } else {
                res.status(404)
                res.send('ID de livro inválido! 📚')
            }
        } else {
            res.status(422)
            res.send('ID de livro inválido! 📚')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}