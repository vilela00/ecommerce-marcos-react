import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CarrinhoItem from "../CarrinhoItem"
import './style.css'

function CarrinhoCheckout () {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <div className='headline_carrinho_checkout'>
                <h4>Resumo do seu Carrinho</h4>
            </div>
            <div>
                {cart.map((produto) => <CarrinhoItem produto={produto} key={produto.id} />)}
            </div>
            <div id="valorTotal1" className='valor_total'>
                {cart != '' ? (
                    <div>
                        <div className='container_pag'>
                            <h5>Valor total do seu carrinho:</h5>
                            <h4>{cart.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                        </div>
                        <div className='container_pag'>
                            <h6>Pague à vista:</h6>
                            <h5>{cart.reduce((soma, preco) => soma + (preco.precoAvista * preco.quantidade), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                        </div>
                        <div className='container_pag'>
                            <h6>Ou parcele em até 10x de:</h6>
                            <h5>{cart.reduce((soma, preco) => soma + (preco.parcela * preco.quantidade), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                        </div>
                    </div>
                ) : (
                    <div className='container_vazio'>
                        <h5 className="vazio_checkout">Seu carrinho está vazio!</h5>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CarrinhoCheckout