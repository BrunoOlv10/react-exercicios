import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  let name = 'Bruno'
  let big = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {big}!</p>
      <p>Soma: {sum(5, 2)}</p>
      <img src={url} alt="Logo React" />
      <HelloWorld />
    </div>
  );
}

export default App;
