import { createContext, useState } from "react"
import Carrinho from '../components/Carrinho';
import { createPortal } from 'react-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Obrigado from "../components/ModalObrigado";

export const CartContext = createContext()

function CartProvider ({ children }) {

    const [ cart, setCart ] = useState([])

    // const { usuario, setUsuario } = useState([])

    const [ showModal, setShowModal ] = useState(false)
    const [ showModal2, setShowModal2 ] = useState(false)
    const [ order, setOrder ] = useState({})

    // function Cadastrar (user) {
    //     user = {nome: user.nome, email: user.email, telefone: user.telefone}
    //     setUsuario (usuario, user)
    // }

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
        setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : {...cartItem}))
    }

    function DiminuiQuantidade(item) {
        setCart(cart.map((cartItem) => (cartItem.id === item.id && cartItem.quantidade > 1) ? { ...cartItem, quantidade: cartItem.quantidade - 1 } : {...cartItem}))
    }

    function CartQuantidade () {
        return cart.reduce((soma, quantidade) => soma + quantidade.quantidade, 0)
    }

    function EnviarPedido () {
        const Pedido =
        {
            comprador: {nome: 'Marcos', email: 'a@a', telefone: '89083091'},
            itens: [...cart],
            total: cart.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        }
        
        const db = getFirestore()
        const ordersCollection = collection(db, "pedidos");

        addDoc(ordersCollection, Pedido)
            .then((doc) => {
                setOrder(Pedido)
                console.log("Pedido criado com sucesso: ", doc.id);
            });

        setCart([])
        setShowModal(false)
        setShowModal2(true)
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart, CartQuantidade, RemoveCart, AumentaQuantidade, DiminuiQuantidade, EnviarPedido }}>
            { children }
            {showModal && createPortal (
                <Carrinho onClose = {() => setShowModal (false)} />, 
                document.body
            )}
            {showModal2 && createPortal (
                <Obrigado order={order} onClose = {() => setShowModal2 (false)} />, 
                document.body
            )}
        </CartContext.Provider>        
    )
}

export default CartProvider