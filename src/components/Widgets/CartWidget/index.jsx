import { useContext, useState } from 'react';
import './style.css'
import { LuShoppingCart } from "react-icons/lu";
import DisplayQuantidade from '../../DisplayQuantidade'
import Carrinho from '../../Carrinho';
import { createPortal } from 'react-dom';
import { CartContext } from '../../../context/CartContext';

//const modal = document.getElementById('modal')

function CartWidget () {

    const { CartQuantidade } = useContext(CartContext)

    const [ showModal, setShowModal ] = useState (false)

    return (
        <div className="container_cart"> 
            <button className='botao_cart' onClick={() => setShowModal (true)}>
                <LuShoppingCart size={20} />
                <div className="quantidade_cart">
                    <DisplayQuantidade quantidade={CartQuantidade()} />
                </div>
            </button>
                {showModal && createPortal (
                    <Carrinho onClose = {() => setShowModal (false)} />, 
                    document.body
                )}
        </div>        
    )
}

export default CartWidget