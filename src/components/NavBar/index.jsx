import "./style.css"
import CartWidget from '../Widgets/CartWidget'
import UserWidget from '../Widgets/UserWidget'

import logo from '../img/logo.png'

function NavBar() {
    return (
      <div className="navbar fixed-top">
          <img src = {logo} className="logo" />
          <nav>
              <ul className="lista_menu">
                  <li><a href=""><button className="btn btn-dark botao_menu">Camisa</button></a></li>
                  <li><a href=""><button className="btn btn-dark botao_menu">Bermuda</button></a></li>
                  <li><a href=""><button className="btn btn-dark botao_menu">Tenis</button></a></li>
                  <li><a href=""><button className="btn btn-dark botao_menu">Casaco</button></a></li>
              </ul>
          </nav>
          
          <div className="container_user">  
            <UserWidget />  
            <CartWidget />
          </div>

      </div>
    );
  }
  
  export default NavBar;