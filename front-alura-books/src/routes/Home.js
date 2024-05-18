//Estilos
import styled from 'styled-components';

//Componentes
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';


function Home() {

  const AppContainer = styled.div`
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    height: 100vh;
    width: 100vw;
  `

  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
