import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'
import './style.css'

function DadosPagamento () {

    const { EnviarPedido } = useContext(CartContext)
    const { cart } = useContext(CartContext)

    return (
        <div>
            <form className="dados_pagamento" id='payment_form'>
                <h4>Dados de Pagamento</h4>
                <label htmlFor="cartao">Numero do cartao</label>
                <input type="text" id="cartao" />
                <label htmlFor="validade">Vencimento do cartao</label>
                <input type="text" id="validade" />
                <label htmlFor="seguranca">Codigo de seguranca</label>
                <input type="text" id="seguranca" />
            </form>
            {cart != '' ? (
                <div>
                    <button className="btn btn-primary" id="realizarPagamento" onClick={() => EnviarPedido()}>Realizar Pagamento</button>
                </div>
            ) : (
                <div className='container_escolher'>
                    <h4>Seu carrinho esta vazio!</h4>
                    <NavLink to={'/'}><button className="btn btn-primary" id="escolherProdutos" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Escolher Produtos</button></NavLink>
                </div>
            )}            
        </div>
    )
}

export default DadosPagamento