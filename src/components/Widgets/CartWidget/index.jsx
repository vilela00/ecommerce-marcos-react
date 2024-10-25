import './style.css'
import { LuShoppingCart } from "react-icons/lu";

function CartWidget () {
    return (
        <div className="container_cart">
            <LuShoppingCart size={20} />
            <div className="quantidade_cart">2</div>
        </div>        
    )
}

export default CartWidget