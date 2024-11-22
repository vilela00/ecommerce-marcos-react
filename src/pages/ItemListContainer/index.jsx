import './style.css'
import Produto from '../../components/Produto'

import ImagemProduto1 from '../../components/img/1.png'
import ImagemProduto2 from '../../components/img/2.jpg'
import ImagemProduto3 from '../../components//img/3.jpg'
import ImagemProduto4 from '../../components/img/4.png'
import ImagemProduto5 from '../../components/img/5.jpg'
import ImagemProduto6 from '../../components/img/6.png'
import ImagemProduto7 from '../../components//img/7.png'
import ImagemProduto8 from '../../components/img/8.png'
import BannerCentral from '../../components/BannerCentral'
import { useEffect, useState, useContext } from 'react'
import Loader from '../../components/Loader'

function ListaProdutos () {

  const [loading, setLoading] = useState(true)

      useEffect(() => {
        const promiseProdutos = new Promise ((resolve, reject) => {
          setTimeout(() => {
            resolve ()}, 4000)          
          })
          promiseProdutos.then((response) => {
            setLoading(false)
            return response
          })
        }, [])

      const vitrinePrincipal = [
        {
          id: 1,
          titulo: 'Macaquinho Curto com Bolsos',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto1,
          imagem2: ImagemProduto2,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90,
          quantidade: 1
        },
        {
          id: 2,
          titulo: 'Saia Longa de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto2,
          imagem2: ImagemProduto4,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90,
          quantidade: 1
        },
        {
          id: 3,
          titulo: 'Blazer Alfaiataria de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto3,
          imagem2: ImagemProduto6,
          preco: 599.90,
          precoAvista: 539.90,
          parcela: 59.90,
          quantidade: 1
        },
        {
          id: 4,
          titulo: 'Vestido Longo de Malha Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto4,
          imagem2: ImagemProduto8,
          preco: 299.90,
          precoAvista: 269.90,
          parcela: 29.90,
          quantidade: 1
        }    
      ]

      const vitrineSecundaria = [
        {
          id: 5,
          titulo: 'Camisa de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto5,
          imagem2: ImagemProduto1,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90,
          quantidade: 1
        },
        {
          id: 6,
          titulo: 'Camisa Oversized Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto6,
          imagem2: ImagemProduto2,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90,
          quantidade: 1
        },
        {
          id: 7,
          titulo: 'Macaquinho Curto de Linho premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto7,
          imagem2: ImagemProduto3,
          preco: 399.90,
          precoAvista: 359.90,
          parcela: 39.90,
          quantidade: 1
        },
        {
          id: 8,
          titulo: 'Top Cropped de Amarracao Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto8,
          imagem2: ImagemProduto4,
          preco: 299.90,
          precoAvista: 269.90,
          parcela: 29.90,
          quantidade: 1
        }    
      ]

    return (
        <div>
          { loading ? (
            <Loader texto={'Carregando vitrine...'}/>
          ) : (
            <div className='lista_produtos'>
              {vitrinePrincipal.map((produto) => <Produto produto={produto} key={produto.id} />)}
            </div>
          ) }
            <div className='container_banner_central'>
                <BannerCentral />
            </div>
            <div className='lista_produtos'>
                {vitrineSecundaria.map((produto) => <Produto produto={produto} key={produto.id} />)}
            </div>
        </div>
    )
}

export default ListaProdutos