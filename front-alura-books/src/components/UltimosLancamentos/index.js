//Estilos
import styled from 'styled-components';
import { Titulo } from '../Titulo';

//Assets
import LivroAngular from '../../assets/livro2.png';

//React

//Mock
import { Livros } from './dadosUltimosLancamentos';
import CardRecomendacao from '../CardRecomendacao';

export default function UltimosLancamentos() {

    const LancamentosContainer = styled.section`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 0;
    `;

    const LivroContainer = styled.div`
        display: flex;
        background-color: lightgray;
        justify-content: center;
        width: 100%;
    `;

    const Livro = styled.div`
        cursor: pointer;
        display: flex;
        justify-content: center;
    `;
    
    return (
        <LancamentosContainer>
            <Titulo cor='#EB9B00'>
                Últimos Lançamentos
            </Titulo>
            <LivroContainer>
            {
                Livros.map((livro) => (
                    <Livro>
                        <img src={livro.src} alt={livro.nome}/>
                    </Livro>
                ))
            }
            </LivroContainer>
            <CardRecomendacao
                titulo='Talvez você se interesse por...'
                substitulo='Angular 11'
                descricao='Construindo uma aplicação com uma plataforma google'
                img={LivroAngular}
            />
        </LancamentosContainer>
    )
}