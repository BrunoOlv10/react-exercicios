import './App.css';
// import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'; 
import Pessoa from './components/Pessoa'; 
import Frase from './components/frase'
import List from './components/List'


function App() {

  let nome = 'Maria'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      {/* <HelloWorld /> */}
      <SayMyName nome='Bruno' />
      <SayMyName nome='Matteus' />
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='28' profissao='Programador' foto='https://via.placeholder.com/150'/>
      <List />
    </div>
  );
}

export default App;
