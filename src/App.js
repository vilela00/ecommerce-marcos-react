import './App.css';

import NavBar from './components/NavBar';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      <h3 className="titulo_conteudo">Conteudo direto na aplicacao</h3>
    </div>
  );
}

export default App;
