//Estilos
import styled from 'styled-components';


//Componentes
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';

export default function Header() {

    const HeaderContainer = styled.header`
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
    `

    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader />
            <IconesHeader/>
        </HeaderContainer>
    );
}