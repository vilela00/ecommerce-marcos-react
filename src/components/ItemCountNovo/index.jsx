import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './style.css'

function Contador ({aumentaQuantidade, diminuiQuantidade, quantidade}) {

    return (
        <div className="container_contador">
            <div className="container_quantidade">
                <button className="btn_quantidade" onClick={diminuiQuantidade}>
                    <FaMinus size={15}/>
                </button>

                <input id="quantidade" className="input_quantidade" type="text" value={quantidade} onChange={ (e) => quantidade(Number(e.target.value)) } />

                <button className="btn_quantidade" onClick={aumentaQuantidade}>
                    <FaPlus size={15}/>
                </button>
            </div>
        </div>
    )
}

export default Contador