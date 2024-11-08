import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import fotoPrincipal1 from '../../components/img/1.png'
import fotoPrincipal2 from '../../components/img/2.jpg'
import fotoPrincipal3 from '../../components/img/3.jpg'
import fotoPrincipal4 from '../../components/img/4.png'
import fotoPrincipal5 from '../../components/img/5.jpg'
import fotoPrincipal6 from '../../components/img/6.png'
import CalcularFrete from '../../components/CalculoFrete';
import VitrineComplementar from '../../components/VitrineComplementar';

import './style.css'
import LikeButton from '../../components/Widgets/LikeButtonWidget';

function DetalheProduto (props) {

    const [checkTamanho, setCheckTamanho] = useState(true)
    const checkHandlerTamanho = () => {
        setCheckTamanho(!checkTamanho)
    }
    const [checkCor, setCheckCor] = useState(true)
    const checkHandlerCor = () => {
        setCheckCor(!checkCor)
    }

    return (
        <div>
            <div className="container_produto container-fluid w-100 d-flex">
                <div className="container_fotos d-flex">
                    <div id="bannerProduto" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <div className='d-flex'>
                                    <img src={fotoPrincipal1} className="d-block w-50" alt="..." />
                                    <img src={fotoPrincipal2} className="d-block w-50" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <div className='d-flex'>
                                    <img src={fotoPrincipal3} className="d-block w-50" alt="..." />
                                    <img src={fotoPrincipal4} className="d-block w-50" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <div className='d-flex'>
                                    <img src={fotoPrincipal5} className="d-block w-50" alt="..." />
                                    <img src={fotoPrincipal6} className="d-block w-50" alt="..." />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#bannerProduto" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#bannerProduto" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>                    
                </div>
                <div className="container_info_detalhe">
                    <LikeButton />
                    <p className='sku_produto'>SKU: 1209392</p>
                    <h4 className='titulo_detalhe_produto'>nome do produto teste titulo</h4>
                    <h4>R$ 399,90</h4>                    
                    <div className="cor">
                        <div className="tx_cor">
                            <p>Selecione a cor</p>
                        </div>
                        <div className="btn-group" role="group1" aria-label="Basic radio toggle button group1">
                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio6" autoComplete="off" onClick={() => setCheckCor(true)} onChange = {checkHandlerCor} />
                            <label className="btn btn-outline-secondary btn1" htmlFor="btnradio6"></label>

                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio7" autoComplete="off" onClick={() => setCheckCor(true)} onChange = {checkHandlerCor} />
                            <label className="btn btn-outline-secondary btn2" htmlFor="btnradio7"></label>

                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio8" autoComplete="off" onClick={() => setCheckCor(true)} onChange = {checkHandlerCor} />
                            <label className="btn btn-outline-secondary btn3" htmlFor="btnradio8"></label>

                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio9" autoComplete="off" onClick={() => setCheckCor(true)} onChange = {checkHandlerCor} />
                            <label className="btn btn-outline-secondary btn4" htmlFor="btnradio9"></label>

                            <input type="radio" className="btn-check" name="btnradio1" id="btnradio10" autoComplete="off" onClick={() => setCheckCor(true)} onChange = {checkHandlerCor} />
                            <label className="btn btn-outline-secondary btn5" htmlFor="btnradio10"></label>
                        </div>
                    </div>
                    <div className="tamanho">
                        <div className="tx_tamanho">
                            <p>Selecione o tamanho</p>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange = {checkHandlerTamanho} onClick={() => setCheckTamanho(true)} />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio1">PP</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => setCheckTamanho(true)} onChange = {() => setCheckTamanho(false)} />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio2">P</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => setCheckTamanho(true)} onChange = {() => setCheckTamanho(false)} />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio3">M</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={() => setCheckTamanho(true)} onChange = {() => setCheckTamanho(false)} />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio4">G</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onClick={() => setCheckTamanho(true)} onChange = {() => setCheckTamanho(false)} />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio5">GG</label>
                        </div>
                    </div>
                    <div className='w-100'>
                        <button className='btn btn-dark botao_comprar w-100'>comprar</button>
                        <div className='container_botao_auxiliar'>
                            <button className='btn btn-outline-dark w-50 botao_auxiliar'><FaWhatsapp /> comprar por WhatsApp</button>
                            <button className='btn btn-outline-dark w-50 botao_auxiliar'><CiVideoOn /> comprar por video</button>
                        </div>
                    </div>
                    <div className='container_descricao'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Descrição
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse descricao_produto texto_accordion" data-bs-parent="#accordionFlushExample">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Especificações
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse especificacao_produto texto_accordion" data-bs-parent="#accordionFlushExample">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Guia de Medidas
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse guia_medidas texto_accordion" data-bs-parent="#accordionFlushExample">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100'>
                        <CalcularFrete />
                    </div>

                </div>
            </div>
            <div>
                <VitrineComplementar />
            </div>
        </div>
    )
}

export default DetalheProduto