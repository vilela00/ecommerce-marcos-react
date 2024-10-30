import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './style.css'

function Contador () {

    const [quantidade, setQuantidade] = useState (1)

    useEffect (() => {
        console.log(quantidade)
    }, [quantidade])

    return (
        <div className="container_contador">
            <div className="container_quantidade">
                <button className="btn_quantidade" onClick={() => {
                    if (quantidade > 1) {
                        setQuantidade (quantidade - 1)}
                    }
                }>
                    <FaMinus size={15}/>
                </button>

                <input id="quantidade" className="input_quantidade" type="text" onChange={() => setQuantidade (quantidade)} value={quantidade} />
                <button className="btn_quantidade" onClick={() => setQuantidade (quantidade + 1)}><FaPlus size={15}/></button>
            </div>
        </div>
    )
}

export default Contador