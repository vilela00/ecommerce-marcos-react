import CarrinhoCheckout from "../../components/CarrinhoCkeckout"
import DadosPagamento from "../../components/DadosPagamento"
import DadosUsuario from "../../components/DadosUsuario"
import './style.css'

function Checkout () {
    return (
        <div className="container_checkout" onLoad={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="container_dados_usuario">
                <DadosUsuario />
                <DadosPagamento />
            </div>
            <div className="carrinho_checkout">
                <CarrinhoCheckout />
            </div>
        </div>
    )
}

export default Checkout