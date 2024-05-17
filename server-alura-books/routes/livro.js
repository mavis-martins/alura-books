const { Router } = require('express')
const { 
    getLivros, 
    getLivro,
    postLivro 
} = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Você está na rota de livros e está realizando um PATCH! 📚')
})

router.delete('/', (req, res) => {
    res.send('Você está na rota de livros e está realizando um DELETE! 📚')
})

module.exports = router