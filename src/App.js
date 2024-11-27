import './App.css';

import BotaoWhatsapp from './components/Widgets/WhatsAppWidget';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import CartProvider from './context/CartContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">



      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        {/* <Checkout /> */}

        <BotaoWhatsapp />
      </CartProvider>

      
      {/*<BannerHome />

      <BannerFaixa />

      <ListaProdutos />

      <AvaliacoesHome />

      {/*<div className="lista_produtos">
          {
            produtos.map((produto) => <Produto titulo = {produto.titulo} descricao = {produto.descricao} imagem = {produto.imagem} preco = {produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} />)
          }
          {/* Aqui estamos chamando o elemento Produto e passando as informacoes diretamente para o elemento
          <Produto
            titulo = "Camisa Selecao Peruana"
            descricao = "Descricao teste aqui de um produto"
          />

          <Produto
            titulo = "Titulo do Produto Teste"
            descricao = "Descricao teste aqui de um produto"
          />
          */}
          {/* aqui utilizamos o elemento Produto inserindo as informacoes via children
          <Produto>
            <h3>Teste de produto inserido via Children</h3>
            <p>Chamando um elemento utilizando children</p>
          </Produto>
          */}
      {/*</div>*/}

    </div>
  );
}

export default App;
