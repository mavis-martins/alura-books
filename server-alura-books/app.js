const express = require('express')
const rotaLivro = require('./routes/livro')
const rotaFavoritos = require('./routes/favoritos')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({ origin:'*' }))

app.use('/livros', rotaLivro)
app.use('/livros-favoritos', rotaFavoritos)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta http://localhost:${port} ✌`)
})