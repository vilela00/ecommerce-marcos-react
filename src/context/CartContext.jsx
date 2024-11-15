import { createContext, useState } from "react"

export const CartContext = createContext()

function CartProvider ({ children }) {

    const [cart, setCart] = useState([])

    function addToCart (item) {
        console.log('teste', item)
        if (!cart.find(cartItem => cartItem.id == item.id)) {
            setCart ([...cart, item])
        } else {
            console.log('Item ja no carrinho')
        }
    }

    function CartQuantidade () {
        return cart.length
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, CartQuantidade }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider