const { Router } = require('express')
const { 
    getLivros, 
    getLivro 
} = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req, res) => {
    res.send('Você está na rota de livros e está realizando um POST! 📚')
})

router.patch('/', (req, res) => {
    res.send('Você está na rota de livros e está realizando um PATCH! 📚')
})

router.delete('/', (req, res) => {
    res.send('Você está na rota de livros e está realizando um DELETE! 📚')
})

module.exports = router