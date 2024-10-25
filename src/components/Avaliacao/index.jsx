import { FaStar } from "react-icons/fa";
import './style.css'

function Avaliacao (props) {
    return (
        <div className="container_avaliacao">
            <h5>{props.nome}</h5>
            <p>{props.texto}</p>
            <div>
                <FaStar color='#FFD700' />
                <FaStar color='#FFD700' />
                <FaStar color='#FFD700' />
                <FaStar color='#FFD700' />
                <FaStar color='#FFD700' />
            </div>
        </div>
    )
}

export default Avaliacao