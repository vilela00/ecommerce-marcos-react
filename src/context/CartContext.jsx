import { createContext, useState } from "react"
import Carrinho from '../components/Carrinho';
import { createPortal } from 'react-dom';

export const CartContext = createContext()

function CartProvider ({ children }) {

    const [ cart, setCart ] = useState([])

    const [ showModal, setShowModal ] = useState(false)

    function AddToCart (item) {     

        if (!cart.find(cartItem => cartItem.id === item.id)) {
            setCart ([...cart, item])
        } else {
            AumentaQuantidade(item)
        }
        setShowModal(true)
    }

    function RemoveCart (item) {
        let newList = cart.filter(cartItem => cartItem.id !== item.id)
        setCart(newList)
    }

    function AumentaQuantidade (item) {
        // let novaQuantidade = cart.find(cartItem => cartItem.id === item.id)
        // ++novaQuantidade.quantidade
        setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : {...cartItem}))
    }

    function DiminuiQuantidade(item) {
        // let novaQuantidade = cart.find(cartItem => cartItem.id === item.id)
        // if (novaQuantidade.quantidade > 1) {
        //     --novaQuantidade.quantidade
        // }
        setCart(cart.map((cartItem) => (cartItem.id === item.id && cartItem.quantidade > 1) ? { ...cartItem, quantidade: cartItem.quantidade - 1 } : {...cartItem}))
    }

    function CartQuantidade () {
        return cart.reduce((soma, quantidade) => soma + quantidade.quantidade, 0)
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart, CartQuantidade, RemoveCart, AumentaQuantidade, DiminuiQuantidade }}>
            { children }
            {showModal && createPortal (
                <Carrinho onClose = {() => setShowModal (false)} />, 
                document.body
            )}
        </CartContext.Provider>        
    )
}

export default CartProvider