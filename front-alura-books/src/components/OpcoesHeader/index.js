//Estilos
import styled from 'styled-components';

export default function OpcoesHeader() {
    const textoOpcoes = [
        'CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'
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
                <Opcao>
                    <p>{texto}</p>
                </Opcao>
            ))}
        </Opcoes>
    )
}