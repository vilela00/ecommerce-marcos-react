import './style.css'
import { RiMastercardFill } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import { SiDinersclub } from "react-icons/si";
import { FaCcAmex } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";



function Footer () {
    return (
        <div className='container-fluid footer'>
            <div className='news'>
                <p>Cadastre-se na nossa Newsletter!</p>
                <div className='container_input_news'>
                    <input type='text' placeholder='email@email.com' className='input_news'></input>
                    <button className='btn btn-primary botao_news'>CADASTRAR</button>
                </div>
            </div>
            <div className='container_menu_footer'>
                <div className='menu_footer'>
                    <ul className='lista_footer'>
                        <li>Camisa</li>
                        <li>Bermuda</li>
                        <li>Tenis</li>
                        <li>Casaco</li>
                        <li>Camisa</li>
                        <li>Bermuda</li>
                        <li>Tenis</li>
                        <li>Casaco</li>
                    </ul>
                    <ul className='lista_footer'>
                        <li>Contato</li>
                        <li>Sobre Nos</li>
                        <li>Minha Conta</li>
                        <li>Termos e Condicoes</li>
                    </ul>
                    <ul className='lista_footer'>
                        <li>Institucional</li>
                        <li>Rastrear Pedido</li>
                        <li>LGPD</li>
                        <li>Chamar no WhatsApp</li>
                    </ul>
                </div>
                <div className='container_footer'>
                    <div className='container_forma'>
                        <p>Formas de pagamento</p>
                        <div className='container_icons'>
                            <RiMastercardFill size={20} />
                            <RiVisaLine size={20} />
                            <SiDinersclub size={20} />
                            <FaCcAmex size={20} />
                            <FaMoneyBillWave size={20} />
                        </div>
                    </div>
                    <div className='container_avaliacoes'>
                        <p>Avaliacoes</p>
                            <div className='estrelas'>
                                <FaStar color='#FFD700' />
                                <FaStar color='#FFD700' />
                                <FaStar color='#FFD700' />
                                <FaStar color='#FFD700' />
                                <FaStarHalf color='#FFD700' />
                            </div>
                        <p>4,5 / 5</p>
                    </div>
                    <div className='container_redes'>
                        <p>Estamos na redes</p>
                        <div className='container_icons'>
                            <FaFacebookSquare size={20} />
                            <FaInstagram size={20} />
                            <TiSocialYoutube size={20} />
                            <AiFillTikTok size={20} />
                            <FaSquarePinterest size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='faixa_footer'>
                <p>Todos os direitos reservados a Loja Gadu 2024</p>
            </div>
        </div>
    )
}

export default Footer