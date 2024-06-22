import db_people from './data/db_people'
import db_imgs from './data/db_imgs'

import './App.css'

function App() {
  const elementos = [
    { id: 1, nome: 'Item 1'},
    { id: 2, nome: 'Item 2'},
    { id: 3, nome: 'Item 3'},
    { id: 4, nome: 'Item 4'},
    { id: 5, nome: 'Item 5'},
  ]

  return (
    <>
      <h1>Loop dentro do JSX</h1>
      <ul>
        {elementos.map((elemento) => (
          <li key={elemento.id}>{elemento.nome}</li>
        ))}
      </ul>

      <h2>Arquivo externo</h2>
      <ul>
        {db_people.map((person) => (
          <li key={person.id}>{person.name} - {person.age} anos</li>
        ))}
      </ul>

    </>
  )
}

export default App
