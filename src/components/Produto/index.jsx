import "./style.css"

function Produto (props) {

    /*function changeClass() {

        let changeClass1 = document.getElementById(`imagem-${props.titulo}`)
        changeClass1.className = 'd-none'
        let changeClass2 = document.getElementById(`imagem2-${props.titulo}`)
        changeClass2.className = 'd-block'
    }

    function changeClass2() {

        let changeClass1 = document.getElementById(`imagem-${props.titulo}`)
        changeClass1.className = 'd-block'
        let changeClass2 = document.getElementById(`imagem2-${props.titulo}`)
        changeClass2.className = 'd-none'
    }*/

    return (
        <div className = "produto container-fluid">
            <button id={`imagem-${props.id}`} className="d-block"><img src = {props.imagem} /></button>
            <button id={`imagem2-${props.id}`} className="d-none"><img src = {props.imagem2} /></button>
                <div className="container_info">
                    <h4>{props.titulo}</h4>
                    <div className="container_preco">
                        <h5>De:</h5>
                        <h5 className="preco">{props.preco}</h5>
                    </div>
                    <h6>Por: {props.precoAvista} via PIX</h6>
                    <p>Ou 10 x de {props.parcela} no credito</p>
                    <div className="container_botoes">
                        <button className = "btn btn-dark btn_cart">ADD CART</button>
                        <button className="btn btn-secondary btn_produto">Ver Produto</button>
                    </div>
                    <p>{props.descricao}</p>
                </div>
            
            {/*{props.children}*/}
        </div>
    )
}

export default Produto