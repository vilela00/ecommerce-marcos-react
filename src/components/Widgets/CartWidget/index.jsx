import './style.css'
import { LuShoppingCart } from "react-icons/lu";

const modal = document.getElementById('modal')

function CartWidget () {
    return (
        <div className="container_cart" onClick={() => modal.showModal()}>
            <LuShoppingCart size={20} />
            <div className="quantidade_cart">2</div>
        </div>        
    )
}

export default CartWidget