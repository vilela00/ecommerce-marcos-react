import "./style.css"
import CartWidget from '../Widgets/CartWidget'
import UserWidget from '../Widgets/UserWidget'
import SearchItem from "../Widgets/SearchWidget";

import logo from '../img/logo.png'

function NavBar() {
    return (
      <div className="navbar fixed-top">
          <img src = {logo} className="logo" />
          <nav>
              <ul className="lista_menu">
                  <li><a href=""><button className="botao_menu">CAMISA</button></a></li>
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
    );
  }
  
  export default NavBar;