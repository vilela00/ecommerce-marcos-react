import "./style.css"

function NavBar() {
    return (
      <div className="navbar">
        <h1>Marcos</h1>

        <nav>
            <ul className="lista_menu">
                <li><a href="">Home</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Novidades</a></li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default NavBar;