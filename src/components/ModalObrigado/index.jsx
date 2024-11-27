import CarrinhoCheckout from '../CarrinhoCkeckout'
import { getDoc, collection, where, query, doc } from 'firebase/firestore'
import db from '../../services/firebase'
import './style.css'

function Obrigado ({ onClose }, props) {

    // Pegar item específico
    const orderRef = doc(db, "pedidos", "Me85A6CrazwtooIGiXNj");
    console.log("orderRef: ", orderRef);

    getDoc(orderRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("snapshot: ", snapshot.data());
            }
        });

    // const OrdersCollection = collection(db, "pedidos");
    // const queryOrders = query(itemsCollection, where(`vitrine`, `==`, `principal`))
    // getDocs(queryPrincipal)
    //   .then((snapshot) => {
    //     setOrder(snapshot.docs.map((order) => ({ ...order.data(), id: order.id })))
    //   });

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
                                <h6>Nome</h6>
                                <h6>E-mail</h6>
                                <h6>Telefone</h6>
                                <h6>Forma de pagamento</h6>
                            </div>
                            <CarrinhoCheckout />
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