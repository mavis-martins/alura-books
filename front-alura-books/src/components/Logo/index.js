//Estilos
import styled from 'styled-components'

//Assets
import logo from '../../assets/logo.svg'

export default function Logo() {

    const LogoContainer = styled.div`
        display: flex;
        font-size: 30px;
    `;

    const LogoImg = styled.img`
        margin-right: 10px;
    `;

    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='logo alura books'
            />
            <p>
                <strong>
                    Alura
                </strong>
                Books
            </p>
        </LogoContainer>
    )
}