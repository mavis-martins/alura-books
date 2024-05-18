//Estilos
import styled from 'styled-components';

//Rotas
import { Link } from 'react-router-dom';

export default function OpcoesHeader() {
    const textoOpcoes = [
        'CATEGORIAS', 'FAVORITOS', 'ESTANTE'
    ]

    const Opcoes = styled.div`
        display: flex;
    `;

    const Opcao = styled.li`
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        height: 100%;
        justify-content: center;
        min-width: 120px;
        padding: 0 5px;
        text-align: center;
        text-transform: uppercase;
    `;

    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}>
                    <Opcao>
                        <p>{texto}</p>
                    </Opcao>
                </Link>
            ))}
        </Opcoes>
    )
}