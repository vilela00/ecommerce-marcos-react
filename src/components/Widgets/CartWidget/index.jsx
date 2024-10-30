import { useEffect, useState } from 'react';
import './style.css'
import { LuShoppingCart } from "react-icons/lu";
import DisplayQuantidade from '../../DisplayQuantidade'

const modal = document.getElementById('modal')

function CartWidget () {

    useEffect (() => {
        console.log('teste')
    },[])

    const [quantidade, setQuantidade] = useState (1)

    return (
        <div className="container_cart" onClick={() => modal.showModal()}>
            <LuShoppingCart size={20} />
            <div className="quantidade_cart">
                <DisplayQuantidade quantidade = {quantidade} setQuantidade = {setQuantidade} />
            </div>
        </div>        
    )
}

export default CartWidget