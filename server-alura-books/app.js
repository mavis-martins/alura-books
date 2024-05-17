const express = require('express')
const rotaLivro = require('./routes/livro')

const app = express()

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta http://localhost:${port} ✌`)
})