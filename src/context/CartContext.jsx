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
            console.log('Item ja no carrinho')
        }
        setShowModal(true)
    }

    function RemoveCart (item) {
        let index = cart.find(cartItem => cartItem.id === item.id)
            setCart ([...cart.splice(index, 1)])
    }

    function CartQuantidade () {
        return cart.length
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart, CartQuantidade, RemoveCart }}>
            { children }
            {showModal && createPortal (
                <Carrinho onClose = {() => setShowModal (false)} />, 
                document.body
            )}
        </CartContext.Provider>        
    )
}

export default CartProvider