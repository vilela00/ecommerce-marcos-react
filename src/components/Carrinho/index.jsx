import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"

import './style.css'
import CarrinhoItem from '../CarrinhoItem'
import Pedido from '../Pedido'

function Carrinho ({ onClose }) {

    const { cart } = useContext(CartContext)
    const { Comprar } = useContext(CartContext)

    return (
        <div className='teste_blur'>
            <div className='container_modal'>
                <section className="modal_carrinho" id='modal'>
                    <div className="modal1">
                        <div className="modal_header">
                            <h4 className="titulo_modal">Seu Carrinho de Compras</h4>
                            <div className="botao_x"><button id='close_x' className="btn btn-secondary close_x" onClick={onClose}>X</button></div>
                        </div>
                        <div className="modal_body" id="produto_modal">
                            <div className='headline_produtos'>
                                <h6 className='w-50'>Produto</h6>
                                <h6 className='w-25'>Quantidade</h6>
                                <h6 className='w-25'>Valor</h6>
                            </div>
                            <div>
                                {cart.map((produto) => <CarrinhoItem produto={produto} key={produto.id}/>)}
                            </div>
                        </div>
                        <div id="valorTotal" className='valor_total'>
                            {cart != '' ? (
                                <div>
                                <div className='container_pag'>
                                    <h5>Valor total do seu carrinho:</h5>
                                    <h4>{cart.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
                                </div>
                                <div className='container_pag'>
                                    <h6>Pague à vista:</h6>
                                    <h5>{cart.reduce((soma, preco) => soma + (preco.precoAvista * preco.quantidade), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                                </div>
                                <div className='container_pag'>
                                    <h6>Ou parcele em até 10x de:</h6>
                                    <h5>{cart.reduce((soma, preco) => soma + (preco.parcela * preco.quantidade), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                                </div>
                                </div>
                            ) : (
                                <div className='container_vazio'>
                                    <h5>Seu carrinho está vazio!</h5>
                                </div>
                            )}
                        </div>
                        <div className="modal_footer">
                            <button id='close' className="btn btn-secondary close" onClick={onClose}>Continuar Comprando</button>
                            <button className="btn btn-primary close" id="comprar">Finalizar Compra</button>
                        </div>                
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Carrinho