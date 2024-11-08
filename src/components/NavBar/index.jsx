import "./style.css"
import CartWidget from '../Widgets/CartWidget'
import UserWidget from '../Widgets/UserWidget'
import SearchItem from "../Widgets/SearchWidget";
import BannerTop from "../BannerTop"

import logo from '../img/logo.png'
import { NavLink, useParams } from "react-router-dom";

function NavBar() {
  const {tipo} = useParams()
  
    return (
      <div>
        <BannerTop />
        <div className="navbar fixed-top">
            <NavLink to={'/'}><img src = {logo} className="logo" /></NavLink>
            <nav>
                <ul className="lista_menu">
                    <li><NavLink to={`/categoria/${tipo}`}><button className="botao_menu">CAMISA</button></NavLink></li>
                    <li><a href=""><button className="botao_menu">BERMUDA</button></a></li>
                    <li><a href=""><button className="botao_menu">TENIS</button></a></li>
                    <li><a href=""><button className="botao_menu">CASACO</button></a></li>
                    <li><a href=""><button className="botao_menu">UNDERWEAR</button></a></li>
                    <li><a href=""><button className="botao_menu">INVERNO</button></a></li>
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