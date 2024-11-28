import "./style.css"
import CartWidget from '../Widgets/CartWidget'
import UserWidget from '../Widgets/UserWidget'
import SearchItem from "../Widgets/SearchWidget";
import BannerTop from "../BannerTop"

import logo from '../img/logo.png'
import { NavLink, useParams } from "react-router-dom";

function NavBar() {
  
  const { tipo } = useParams()
  
    return (
      <div>
        <BannerTop />
        <div className="navbar fixed-top">
            <NavLink to={'/'}><img src = {logo} className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /></NavLink>
            <nav>
                <ul className="lista_menu">
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CAMISA</button></NavLink></li>
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BERMUDA</button></NavLink></li>
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>TENIS</button></NavLink></li>
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CASACO</button></NavLink></li>
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>VERAO</button></NavLink></li>
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>INVERNO</button></NavLink></li>
                </ul>
            </nav>
            
            <div className="container_user">  
              <div className="container_icon">
                <SearchItem />
              </div>
              <div className="container_icon">            
                <UserWidget />  
              </div>
              <div className="container_icon">
                <CartWidget />
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;