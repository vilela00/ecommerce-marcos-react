import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './style.css'

function DadosUsuario (props) {

    const { Cadastrar } = useContext(CartContext)

    return (
        <div>
            <form className="dados_usuario">
                <h4>Dados Pessoais</h4>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" id="nome" value={props.nome} />
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={props.email} />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" value={props.telefone} />
            </form>
            {/* <button className='btn btn-primary' onClick={() => Cadastrar()}>Cadastrar</button> */}
        </div>
    )
}

export default DadosUsuario