import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Contador from "../ItemCountNovo"
import { FaRegTrashCan } from "react-icons/fa6";

function CarrinhoItem (props) {

    const { RemoveCart } = useContext(CartContext)

    const { AumentaQuantidade } = useContext(CartContext)

    const { DiminuiQuantidade } = useContext(CartContext)

    return (
        <div className="container_produto_modal">
            <div className="imagem_produto_modal">
                <img src={props.produto.imagem} width='120px' alt="" />
                <p>{props.produto.titulo}</p>
            </div>
            <div className='quantidade_modal'>
                <Contador
                    diminuiQuantidade={() => DiminuiQuantidade(props.produto)}
                    aumentaQuantidade={() => AumentaQuantidade(props.produto)}
                    quantidade={props.produto.quantidade}
                />
            </div>
            <div className="valor_modal">
                <p>{(props.produto.preco * props.produto.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
            <div>
                <button className="border border-0 bg-transparent" onClick={() => RemoveCart(props.produto)}>
                    <FaRegTrashCan size={15}/>
                </button>
            </div>
        </div>
    )
}

export default CarrinhoItem