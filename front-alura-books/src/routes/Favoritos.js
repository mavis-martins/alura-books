//Estilos
import styled from 'styled-components';

//React
import { useEffect, useState } from 'react';

//Serviços
import { deleteLivroFavorito, getLivrosFavoritos } from '../services/favoritos';

//Componentes
import { Titulo } from '../components/Titulo';

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const livrosFavoritos = await getLivrosFavoritos()
    setFavoritos(livrosFavoritos)
  }

  async function deleteFavorito(id) {
    await deleteLivroFavorito(id)
    await fetchFavoritos()
    alert('Livro removido dos favoritos com sucesso!')
  }

  const AppContainer = styled.div`
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    height: 100vh;
    width: 100vw;
  `
  const FavoritosContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `
  const TituloLivro = styled.h2`
    color: #FFF;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;
    padding: 25px 0;
    text-align: center;
    width: 100%;
    &:hover {
      border: 1px solid white;
    }
  `

  return (
    <AppContainer>
      <Titulo cor='orange'>
        Seus Livros Favoritos
      </Titulo>
      <FavoritosContainer>
        {favoritos.map(favorito => (
          <TituloLivro onClick={() => deleteFavorito(favorito.id)}>
            {favorito.nome}
          </TituloLivro>
        ))}
      </FavoritosContainer>
    </AppContainer>
  );
}

export default Favoritos;
