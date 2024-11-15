import { useEffect, useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./style.css"

function Produto (props) {

    const {addToCart} = useContext(CartContext)

    const [name, setName] = useState(props.imagem)
    const {id} = useParams()

    return (
        <div className = "produto container-fluid">
            <button className="d-block"><img src = {name} onMouseOver={() => setName(props.imagem2)} onMouseOut={() => setName(props.imagem)} /></button>
                <div className="container_info">
                    <h5>{props.titulo}</h5>
                    <div className="container_preco">
                        <h5>De:</h5>
                        <h5 className="preco">{props.preco}</h5>
                    </div>
                    <h6>Por: {props.precoAvista} via PIX</h6>
                    <p>Ou 10 x de {props.parcela} no credito</p>
                    <div className="container_botoes">
                        <button className = "btn btn-dark btn_cart" onClick={() => addToCart(props.produto)}>ADD CART</button>
                        <NavLink to={`/produto/${props.id}`}><button className="btn btn-secondary btn_produto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ver Produto</button></NavLink>
                    </div>
                    {/*<p>{props.descricao}</p>*/}
                </div>
            
            {/*{props.children}*/}
        </div>
    )
}

export default Produto