import { useState } from "react"
import Contador from "../ItemCountNovo"

function CarrinhoItem (props) {
    
    const [quantidade, setQuantidade] = useState(1)

    const diminuiQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade (quantidade - 1)
        }
    }
    const aumentaQuantidade = () => {
        setQuantidade (quantidade + 1)
    }

    return (
        <div className="container_produto_modal">
            <div className="imagem_produto_modal">
                <img src={props.produto.imagem} width='120px' alt="" />
                <p>{props.produto.titulo}</p>
            </div>
            <div className='quantidade_modal'>
                <Contador
                    diminuiQuantidade={diminuiQuantidade}
                    aumentaQuantidade={aumentaQuantidade}
                    quantidade={quantidade}
                />
            </div>
            <div className="valor_modal">
                <p>{props.produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
        </div>
    )
}

export default CarrinhoItem