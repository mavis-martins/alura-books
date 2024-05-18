const Router = require('express')
const {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
} = require('../controllers/favoritos')

const router = Router()

router.get('/', getFavoritos)

router.get('/:id', getFavorito)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router 