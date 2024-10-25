import './style.css'
import Avaliacao from '../Avaliacao'

function AvaliacoesHome () {

    const listaAvaliacoes = [
        {
            id: 1,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 3,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 4,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 5,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 6,
            nome: 'Marcia',
            texto: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
    ]

    return (
        <div className='container-fluid container_pre_footer'>
            <h3>O que falam sobre nos!</h3>
            <div className='container_avaliacoes_home'>
                {listaAvaliacoes.map((avaliacao) => <li key={avaliacao.id}> <Avaliacao nome = {avaliacao.nome} texto = {avaliacao.texto}/> </li> )}
            </div>
        </div>
    )
}

export default AvaliacoesHome