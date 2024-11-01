import { useState } from "react"
import "./style.css"

function Produto (props) {

    const [name, setName] = useState(props.imagem)

    return (
        <div className = "produto container-fluid">
            <button className="d-block"><img src = {name} onMouseOver={() => setName(props.imagem2)} onMouseOut={() => setName(props.imagem)} /></button>
                <div className="container_info">
                    <h4>{props.titulo}</h4>
                    <div className="container_preco">
                        <h5>De:</h5>
                        <h5 className="preco">{props.preco}</h5>
                    </div>
                    <h6>Por: {props.precoAvista} via PIX</h6>
                    <p>Ou 10 x de {props.parcela} no credito</p>
                    <div className="container_botoes">
                        <button className = "btn btn-dark btn_cart">ADD CART</button>
                        <button className="btn btn-secondary btn_produto">Ver Produto</button>
                    </div>
                    <p>{props.descricao}</p>
                </div>
            
            {/*{props.children}*/}
        </div>
    )
}

export default Produto