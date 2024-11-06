import { LiaShippingFastSolid } from "react-icons/lia";

import './style.css'

function CalcularFrete () {
    return (
        <div>
            <div className="frete">
                <p>Digite o CEP para simular o valor e prazo do frete:</p>
                <div className="frete_display">
                    <div className="icon_frete">
                        <LiaShippingFastSolid size={25} />
                    </div>
                    <div className="input_frete">
                        <input type="text" className="w-100" />
                    </div>
                    <div className="caixa_frete">
                        <button type="button" className="btn btn-dark btn-sm botao_frete" data-bs-toggle="modal" data-bs-target="#exampleModal">simular frete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalcularFrete