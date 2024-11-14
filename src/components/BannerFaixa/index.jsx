import './style.css'
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaCreditCard } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

function BannerFaixa () {
    return (
        <div>
            <div className='container_faixa1 d-block'>
                <div className='container_ofertas'>
                    <div className='container_oferta'>
                        <div className='barra_lateral'></div>
                        <div className='icon_frame'>
                            <LiaShippingFastSolid size={25} />
                        </div>
                        <div className='container_texto_faixa'>
                            <p><strong>Frete Gratis</strong></p>
                            <p>Para compras acima de R$ 299,00</p>
                        </div>
                    </div>
                    <div className='container_oferta'>
                    <div className='barra_lateral'></div>
                        <div className='icon_frame'>
                            <FaCreditCard size={25} />
                        </div>
                        <div className='container_texto_faixa'>
                            <p><strong>Parcele SEM juros</strong></p>
                            <p>Em ate 10 parcelas sem acrescimo</p>
                        </div>
                    </div>
                    <div className='container_oferta'>
                    <div className='barra_lateral'></div>
                        <div className='icon_frame'>
                            <RiDiscountPercentLine size={25} />
                        </div>
                        <div className='container_texto_faixa'>
                            <p><strong>10% de Desconto</strong></p>
                            <p>Para pagamento a vista via PIX</p>
                        </div>
                    </div>
                    <div className='container_oferta'>
                    <div className='barra_lateral'></div>
                        <div className='icon_frame'>
                            <AiOutlineSafety size={25} />
                        </div>
                        <div className='container_texto_faixa'>
                            <p><strong>Sua Compra Segura</strong></p>
                            <p>Ambiente de compra seguro com certificado SSL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_faixa2 d-none'>
                <div id="bannerFaixa" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <div className='container_oferta'>
                                <div className='barra_lateral'></div>
                                <div className='icon_frame'>
                                    <LiaShippingFastSolid size={25} />
                                </div>
                                <div className='container_texto_faixa'>
                                    <p><strong>Frete Gratis</strong></p>
                                    <p>Para compras acima de R$ 299,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className='container_oferta'>
                                <div className='barra_lateral'></div>
                                <div className='icon_frame'>
                                    <FaCreditCard size={25} />
                                </div>
                                <div className='container_texto_faixa'>
                                    <p><strong>Parcele SEM juros</strong></p>
                                    <p>Em ate 10 parcelas sem acrescimo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className='container_oferta'>
                                <div className='barra_lateral'></div>
                                <div className='icon_frame'>
                                    <RiDiscountPercentLine size={25} />
                                </div>
                                <div className='container_texto_faixa'>
                                    <p><strong>10% de Desconto</strong></p>
                                    <p>Para pagamento a vista via PIX</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className='container_oferta'>
                                <div className='barra_lateral'></div>
                                <div className='icon_frame'>
                                    <AiOutlineSafety size={25} />
                                </div>
                                <div className='container_texto_faixa'>
                                    <p><strong>Sua Compra Segura</strong></p>
                                    <p>Ambiente de compra seguro com certificado SSL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev botao_banner_faixa" type="button" data-bs-target="#bannerFaixa" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#bannerFaixa" data-bs-slide="next">
                        <span className="carousel-control-next-icon botao_banner_faixa" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerFaixa