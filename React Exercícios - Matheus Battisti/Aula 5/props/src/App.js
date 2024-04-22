import './App.css';
// import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'; 
import Pessoa from './components/Pessoa'; 

function App() {

  let nome = 'Maria'

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <SayMyName nome='Bruno' />
      <SayMyName nome='Matteus' />
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='28' profissao='Programador' foto='https://via.placeholder.com/150'/>
      
    </div>
  );
}

export default App;
