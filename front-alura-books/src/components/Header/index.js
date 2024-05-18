//Estilos
import styled from 'styled-components';


//Componentes
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import { Link } from 'react-router-dom';

export default function Header() {

    const HeaderContainer = styled.header`
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
    `

    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader/>
        </HeaderContainer>
    );
}