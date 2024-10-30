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

function ListaProdutos () {

    const vitrine_principal = [
        {
          id: 1,
          titulo: 'Macaquinho Curto com Bolsos',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto1,
          imagem2: ImagemProduto2,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 2,
          titulo: 'Saia Longa de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto2,
          imagem2: ImagemProduto4,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 3,
          titulo: 'Blazer Alfaiataria de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto3,
          imagem2: ImagemProduto6,
          preco: 599.90,
          precoAvista: 539.90,
          parcela: 59.90
        },
        {
          id: 4,
          titulo: 'Vestido Longo de Malha Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto4,
          imagem2: ImagemProduto8,
          preco: 299.90,
          precoAvista: 269.90,
          parcela: 29.90
        }    
      ]
      const vitrine_secundaria = [
        {
          id: 5,
          titulo: 'Camisa de Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto5,
          imagem2: ImagemProduto1,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 6,
          titulo: 'Camisa Oversized Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto6,
          imagem2: ImagemProduto2,
          preco: 199.90,
          precoAvista: 179.90,
          parcela: 19.90
        },
        {
          id: 7,
          titulo: 'Macaquinho Curto de Linho premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto7,
          imagem2: ImagemProduto3,
          preco: 399.90,
          precoAvista: 359.90,
          parcela: 39.90
        },
        {
          id: 8,
          titulo: 'Top Cropped de Amarracao Linho Premium',
          descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
          imagem: ImagemProduto8,
          imagem2: ImagemProduto4,
          preco: 299.90,
          precoAvista: 269.90,
          parcela: 29.90
        }    
      ]

    return (
        <div>
            <div className='lista_produtos'>
                {vitrine_principal.map((produto) => <li key={produto.id}><Produto id = {produto.id} titulo = {produto.titulo} descricao = {produto.descricao} imagem = {produto.imagem} imagem2 = {produto.imagem2} preco = {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} precoAvista = {produto.precoAvista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} parcela = {produto.parcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} /></li>)}
            </div>
            <div className='container_banner_central'>
                <BannerCentral />
            </div>
            <div className='lista_produtos'>
                {vitrine_secundaria.map((produto) => <li key={produto.id}><Produto id = {produto.id} titulo = {produto.titulo} descricao = {produto.descricao} imagem = {produto.imagem} imagem2 = {produto.imagem2} preco = {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} precoAvista = {produto.precoAvista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} parcela = {produto.parcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} /></li>)}
            </div>
        </div>
    )
}

export default ListaProdutos