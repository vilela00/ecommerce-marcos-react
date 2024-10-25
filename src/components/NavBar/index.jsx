import "./style.css"
import CartWidget from '../CartWidget'

function NavBar() {
    return (
      <div className="navbar">
          <h1>Marcos</h1>
          <nav>
              <ul className="lista_menu">
                  <li><a href="">Camisa</a></li>
                  <li><a href="">Bermuda</a></li>
                  <li><a href="">Tenis</a></li>
                  <li><a href="">Casaco</a></li>
              </ul>
          </nav>
          
      <CartWidget />

      </div>
    );
  }
  
  export default NavBar;