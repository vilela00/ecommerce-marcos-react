import CarrinhoCheckout from '../CarrinhoCkeckout'
// import { getDocs, collection, where, query, doc } from 'firebase/firestore'
// import db from '../../services/firebase'
import './style.css'
// import { useState } from 'react'

function Obrigado ({ onClose, order }) {

    // const [ usuario, setUsuario ] = useState('')

    // // Pegar item específico
    // const orderRef = doc(db, "pedidos", "iY9mWExY5KCgLLvZ5xS0");
    // console.log("orderRef: ", orderRef);



    // const OrdersCollection = collection(db, "pedidos");
    // const queryOrders = query(OrdersCollection, where(`comprador.nome`, `==`, `Marcos`))
    // getDocs(queryOrders)
    //   .then((snapshot) => {
    //     setUsuario(snapshot.docs.map((order) => ({ ...order.data(), id: order.id })))
    //     console.log(usuario)
    //   });

    const itens = order.itens
    console.log(itens)

    return (
        <div className='teste_blur'>
            <div className='container_modal_obrigado'>
                <section className="modal_carrinho" id='modal'>
                    <div className="modal1_obrigado">
                        <div className="modal_header_obrigado">
                            <h4>Recebemos o seu pedido!</h4>
                        </div>
                        <div className="modal_body" id="produto_modal">
                            <div className='container_info_obrigado'>
                                <h6>Nome: {order.comprador?.nome}</h6>
                                <h6>E-mail: {order.comprador?.email}</h6>
                                <h6>Telefone: {order.comprador?.telefone}</h6>
                                <h6>Forma de pagamento</h6>
                            </div>
                            <p>{itens[0].titulo}</p>
                            <p>Muito obrigado pela sua compra! Agradecemos a preferencia!</p>
                        </div>
                        <div className="modal_footer">
                            <button className="btn btn-secondary close" id="comprar" onClick={onClose}>Fechar</button>
                        </div>                
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Obrigado