import { useEffect, useState } from 'react'
import { getDocs, collection, where, query } from 'firebase/firestore'
import db from '../../services/firebase'
import { useParams } from 'react-router-dom'
import Produto from '../../components/Produto'
import './style.css'

function Categoria() {

    const [ listaCategoria, setListaCategoria ] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        // Pegar coleção
        const itemsCollection = collection(db, "produtos");
        const queryCategoria = query(itemsCollection, where(`categoria`, `==`, `${categoriaId}` ))
        getDocs(queryCategoria)
            .then((snapshot) => {
                setListaCategoria(snapshot.docs.map((item) => ({ ...item.data(), id: item.id })))
            });
    }, [categoriaId])

    return (
        <div>
            <h3 className='categoria'>{categoriaId}</h3>
            <p className='texto_categoria'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada tempus purus sit amet mollis. Sed convallis aliquet tellus eu ornare. Nullam suscipit purus at nunc facilisis, sit amet hendrerit mauris auctor. Aenean nec tortor eleifend, ullamcorper dolor nec, aliquet urna. Proin non ipsum tortor. Nunc sit amet porta est. Quisque quis pulvinar mi, non porttitor ex. Fusce molestie dictum lectus, ut tempus elit consectetur vitae. Aenean suscipit feugiat mi, non aliquam orci rutrum id. Sed odio arcu, luctus in rhoncus id, suscipit non justo. Integer quis congue ex, sit amet consequat nibh. Proin neque ipsum, sodales condimentum tortor id, ullamcorper fringilla nibh. Sed ex enim, congue ac felis bibendum, condimentum pretium lacus. Nunc imperdiet venenatis libero. Duis facilisis quis ipsum vitae blandit.</p>
            <div className='lista_produtos_categoria'>
                {listaCategoria.map((produto) => <Produto produto={produto} key={produto.id} />)}
            </div>
        </div>
    )
}

export default Categoria