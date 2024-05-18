const {
    getTodosLivrosFavoritos,
    getLivroFavoritoPorId,
    inserirLivroFavorito,
    removerLivroFavoritoPorId
} = require('../services/favoritos')

const {
    getLivroPorId
} = require('../services/livro')


function getFavoritos(req, res) {
    try {
        const favoritos = getTodosLivrosFavoritos()
        res.send(favoritos)
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

function getFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livroFavorito = getLivroFavoritoPorId(id)

            if(livroFavorito) {
                res.send(livroFavorito)
            } else {
                res.status(404)
                res.send('Livro favorito não encontrado')
            }
        } else {
            res.status(422)
            res.send('ID de livro favorito inválido')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id

        if(id) {
            const livroFavorito = getLivroPorId(id)

            if(livroFavorito) {
                inserirLivroFavorito(id)
                res.status(201)
                res.send('Livro favorito inserido com sucesso! 📚')
            } else {
                res.status(404)
                res.send('Livro não encontrado! 📚 Verifique o id')
            }
        } else {
            res.status(422)
            res.send('ID de livro inválido! 📚')
        }
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livroFavorito = getLivroFavoritoPorId(id)

            if(livroFavorito) {
                removerLivroFavoritoPorId(id)
                res.send('Livro favorito removido com sucesso! 📚')
            } else {
                res.status(404)
                res.send('ID de livro favorito inválido! 📚')
            }
        } else {
            res.status(422)
            res.send('ID de livro favorito inválido! 📚')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
}