// import { getDocs, collection, where, query, doc } from 'firebase/firestore'
// import db from '../../services/firebase'
import { IoBagCheckOutline } from "react-icons/io5";
import './style.css'
// import { useState, useEffect } from 'react';
// import { useState } from 'react'

function Obrigado ({ onClose, order }) {

    const numeroPedido = Math.round(Math.random() * 100000)

    return (
        <div className='teste_blur'>
            <div className='container_modal_obrigado'>
                <section className="modal_carrinho" id='modal1'>
                    <div className="modal1_obrigado">
                        <div className="modal_header_obrigado">
                            <IoBagCheckOutline size={80}/>
                            <h4>Uhuu! {order.comprador?.nome}, recebemos o seu pedido #{numeroPedido}</h4>
                            <h5>Valor total da sua compra: {order.total}</h5>
                        </div>
                        <div className="modal_body" id="produto_modal">
                            <div className='container_info_obrigado'>
                                <h6>E-mail: {order.comprador?.email}</h6>
                                <h6>Telefone: {order.comprador?.telefone}</h6>
                            </div>
                            <p>Muito obrigado pela sua compra! Agradecemos a preferencia!</p>
                        </div>
                        <div className="modal_footer">
                            <button className="btn btn-secondary close" id="comprar1" onClick={onClose}>Fechar</button>
                        </div>                
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Obrigado