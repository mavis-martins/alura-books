//Estilos
import styled from 'styled-components';

//Componentes
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';

export default function IconesHeader() {
    const icones = [
        perfil, sacola
    ];

    const Icones = styled.ul`
        align-items: center;
        display: flex;
    `;

    const Icone = styled.li`
        margin-right: 40px;
        width: 25px;
    `;

    return (
        <Icones>
            {icones.map((icone) => (
                <Icone>
                    <img src={icone} alt={icone} />
                </Icone>
            ))}
        </Icones>
    )
}