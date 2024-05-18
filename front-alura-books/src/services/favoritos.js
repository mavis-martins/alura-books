import axios from 'axios';

const livrosFavoritosApi = axios.create({
    baseURL: 'http://localhost:8000/livros-favoritos'
})

async function getLivrosFavoritos() {
    const response = await livrosFavoritosApi.get('/')

    return response.data
}

async function postLivroFavorito(id) {
    await livrosFavoritosApi.post(`/${ id }`)
}

async function deleteLivroFavorito(id) {
    await livrosFavoritosApi.delete(`/${ id }`)
}

export {
    getLivrosFavoritos,
    postLivroFavorito,
    deleteLivroFavorito
}