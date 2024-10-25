import "./style.css"

function Produto (props) {
    return (
        <div className = "produto">
            <img src = {props.foto} />
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            {props.children}
        </div>
    )
}

export default Produto