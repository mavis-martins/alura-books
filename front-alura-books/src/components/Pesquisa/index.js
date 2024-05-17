//Estilos
import styled from 'styled-components';
import Input from '../Input';

//React
import { useState } from 'react';

//Mock
import { Livros } from './dadosPesquisa';

export default function Pesquisa() {

    const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 470px;
        width: 100%;
    `;

    const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
    `;

    const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
    `;

    const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
    `; 

    const [livroPesquisado, setLivroPesquisado] = useState([]);

    function pesquisarLivro(e){
        const textoDigitado = e.target.value;
        const resultadoPesquisa = Livros.filter(
            livro => livro.nome.includes(textoDigitado) 
        ) 
        setLivroPesquisado(resultadoPesquisa);
    }

    return (
        <PesquisaContainer>
            <Titulo>
                Já sabe por onde começar?
            </Titulo>
            <Subtitulo>
                Encontre seu livro em nossa estante.
            </Subtitulo>
            <Input 
                placeholder='Escreva sua próxima leitura'
                onBlur={(e) => {
                    pesquisarLivro(e)
                }}
            />
            {
                livroPesquisado.map(livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={livro.nome}/>
                    </Resultado>
                ))
            }
        </PesquisaContainer>
    )
}