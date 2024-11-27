import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './style.css'

function DadosPagamento () {

    const { EnviarPedido } = useContext(CartContext)

    return (
        <div>
            <form className="dados_pagamento">
                <h4>Dados de Pagamento</h4>
                <label htmlFor="cartao">Numero do cartao</label>
                <input type="text" id="cartao" />
                <label htmlFor="validade">Vencimento do cartao</label>
                <input type="text" id="validade" />
                <label htmlFor="seguranca">Codigo de seguranca</label>
                <input type="text" id="seguranca" />
            </form>
            <button className="btn btn-primary" id="realizarPagamento" onClick={() => EnviarPedido()}>Realizar Pagamento</button>
        </div>
    )
}

export default DadosPagamento