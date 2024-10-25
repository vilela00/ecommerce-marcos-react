import './App.css';

import NavBar from './components/NavBar';
import Produto from './components/Produto';

function App() {
  
  let nome = "Teste de variavel pra uso"
  let foto = "./components/Produto/img/3.png"

  const produtos = [
    {
      titulo: 'Teste Titulo1',
      descricao: "teste descricao"
    },
    {
      titulo: 'Teste Titulo2',
      descricao: "teste descricao"
    },
    {
      titulo: 'Teste Titulo3',
      descricao: "teste descricao"
    },
    {
      titulo: 'Teste Titulo4',
      descricao: "teste descricao"
    }    
  ]

  return (
    <div className="App">
      <NavBar />

      <h3 className="titulo_conteudo">Conteudo direto na aplicacao</h3>

      <div className="lista_produtos">

          {
            produtos.map((produto) => <Produto titulo = {produto.titulo} descricao = {produto.descricao} />)
          }

          <Produto
            foto = {foto}
            titulo = {nome}
            descricao = "Descricao teste aqui de um produto"
          />

          <Produto
            titulo = "Camisa Selecao Peruana"
            descricao = "Descricao teste aqui de um produto"
          />

          <Produto
            titulo = "Titulo do Produto Teste"
            descricao = "Descricao teste aqui de um produto"
          />

          
          <Produto>
            <h3>Camisa Selecao Peruana</h3>
            <p>Descricao teste aqui de um produto</p>
          </Produto>
          
      </div>

    </div>
  );
}

export default App;
