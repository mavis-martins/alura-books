import styled from 'styled-components';

export const Titulo = styled.h2`
    color: ${props => props.cor || '#000000'};
    font-size: ${props => props.tamanhoFonte || '36px'};
    padding: 30px 0;
    text-align: ${props => props.alinhamento || 'center'};
    text-transform: uppercase;
`;