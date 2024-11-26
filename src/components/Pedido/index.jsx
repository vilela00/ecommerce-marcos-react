import { CartContext } from "../../context/CartContext"
import { getDocs, collection, where, query, addDoc } from 'firebase/firestore'
import db from '../../services/firebase'
import { useContext } from "react"

function Pedido () {

    const { cart } = useContext(CartContext)

    const Dados = [
        {
            comprador: {nome: 'Marcos', email: 'a@a', telefone: '89083091'},
            carrinho: {...cart},
            total: 2000
        }
    ]

    const ordersCollection = collection(db, "pedidos");

    addDoc(ordersCollection, Pedido)
      .then((doc) => {
        console.log("Pedido criado com sucesso: ", doc.id);
      });

    return (
        <div>

        </div>
    )
}

export default Pedido