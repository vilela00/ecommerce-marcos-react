import imagem from '../img/1.png'
import Contador from '../ItemCount'

import './style.css'

function Carrinho ( {onClose}) {
    return (
        <div className='container_modal'>
            <section className="modal_carrinho" id='modal'>
                <div className="modal1">
                    <div className="modal_header">
                        <h4 className="titulo_modal">Seu Carrinho de Compras</h4>
                        <div className="botao_x"><button id='close_x' className="btn btn-secondary close_x" onClick={onClose}>X</button></div>
                    </div>
                    <div className="modal_body" id="produto_modal">
                        <div className='headline_produtos'>
                            <h6 className='w-50'>Produto</h6>
                            <h6 className='w-25'>Quantidade</h6>
                            <h6 className='w-25'>Valor</h6>
                        </div>
                        <div className="container_produto_modal">
                            <div className="imagem_produto_modal">
                                <img src={imagem} width='120px' alt="" />
                                <p>Vestido Longo Decote V Com Bolsos Laterais</p>
                            </div>
                            <div className='quantidade_modal'>
                                <Contador />
                            </div>
                            <div className="valor_modal">
                                <p>R$ 599,90</p>
                            </div>
                        </div>
                    </div>
                    <div id="valorTotal"></div>
                    <div className="modal_footer">
                        <button id='close' className="btn btn-secondary close" onClick={onClose}>Continuar Comprando</button>
                        <button className="btn btn-primary close" id="comprar">Finalizar Compra</button>
                    </div>                
                </div>
            </section>
        </div>
    )
}

export default Carrinho