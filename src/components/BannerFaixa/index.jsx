import './style.css'
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaCreditCard } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

function BannerFaixa () {
    return (
        <div>
            <div className='container_ofertas'>
                <div className='container_oferta'>
                    <div className='barra_lateral'></div>
                    <div className='icon_frame'>
                        <LiaShippingFastSolid size={25} />
                    </div>
                    <div>
                        <p><strong>Frete Gratis</strong></p>
                        <p>Para compras acima de R$ 299,00</p>
                    </div>
                </div>
                <div className='container_oferta'>
                <div className='barra_lateral'></div>
                    <div className='icon_frame'>
                        <FaCreditCard size={25} />
                    </div>
                    <div>
                        <p><strong>Parcele SEM juros</strong></p>
                        <p>Em ate 10 parcelas sem acrescimo</p>
                    </div>
                </div>
                <div className='container_oferta'>
                <div className='barra_lateral'></div>
                    <div className='icon_frame'>
                        <RiDiscountPercentLine size={25} />
                    </div>
                    <div>
                        <p><strong>10% de Desconto</strong></p>
                        <p>Para pagamento a vista via PIX</p>
                    </div>
                </div>
                <div className='container_oferta'>
                <div className='barra_lateral'></div>
                    <div className='icon_frame'>
                        <AiOutlineSafety size={25} />
                    </div>
                    <div>
                        <p><strong>Sua Compra Segura</strong></p>
                        <p>Ambiente de compra seguro com certificado SSL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFaixa