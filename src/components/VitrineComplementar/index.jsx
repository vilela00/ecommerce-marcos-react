import './style.css'
import Produto from '../Produto'

import ImagemProduto1 from '../img/1.png'
import ImagemProduto2 from '../img/2.jpg'
import ImagemProduto3 from '../img/3.jpg'
import ImagemProduto4 from '../img/4.png'
import ImagemProduto5 from '../img/5.jpg'
import ImagemProduto6 from '../img/6.png'
import ImagemProduto7 from '../img/7.png'
import ImagemProduto8 from '../img/8.png'
import BannerCentral from '../BannerCentral'
import { useEffect, useState } from 'react'

function VitrineComplementar () {

      const vitrineSecundaria = [
        {
          id: 5,
          titulo: 'Camisa de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto5,
          imagem2: ImagemProduto1,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 6,
          titulo: 'Camisa Oversized Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto6,
          imagem2: ImagemProduto2,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 7,
          titulo: 'Macaquinho Curto de Linho premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto7,
          imagem2: ImagemProduto3,
          preco: 399.90,
          precoAvista: 359.90,
          parcela: 39.90
        },
        {
          id: 8,
          titulo: 'Top Cropped de Amarracao Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
          imagem: ImagemProduto8,
          imagem2: ImagemProduto4,
          preco: 299.90,
          precoAvista: 269.90,
          parcela: 29.90
        }    
      ]

    return (
        <div>
            <div className='titulo_complementar'>
                <h5>relacionados</h5>   
            </div>     
            <div className='lista_produtos_complementar'>
                {vitrineSecundaria.map((produto) => <Produto produto={produto} key = {produto.id} />)}
            </div>
        </div>
    )
}

export default VitrineComplementar