import { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Carrinho from '../Carrinho';
import { createPortal } from 'react-dom';
import "./style.css"

function Produto (props) {

    const { AddToCart } = useContext(CartContext)

    const [ showModal, setShowModal ] = useState (false)

    const [ name, setName ] = useState(props.produto.imagem)
    const { id } = useParams()

    return (
        <div className = "produto container-fluid">
            <button className="d-block"><img src = {name} onMouseOver={() => setName(props.produto.imagem2)} onMouseOut={() => setName(props.produto.imagem)} /></button>
                <div className="container_info">
                    <h5>{props.produto.titulo}</h5>
                    <div className="container_preco">
                        <h5>De:</h5>
                        <h5 className="preco">{props.produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                    </div>
                    <h6>Por: {props.produto.precoAvista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} via PIX</h6>
                    <p>Ou 10 x de {props.produto.parcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no credito</p>
                    <div className="container_botoes">
                        <button className = "btn btn-dark btn_cart" onClick={() => AddToCart(props.produto)}>ADD CART</button>
                        <NavLink to={`/produto/${props.produto.id}`}><button className="btn btn-secondary btn_produto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ver Produto</button></NavLink>
                    </div>
                    {/*<p>{props.descricao}</p>*/}
                </div>
                {showModal && createPortal (
                    <Carrinho onClose = {() => setShowModal (false)} />, 
                    document.body
                )}
            
            {/*{props.children}*/}
        </div>
    )
}

export default Produto