import { useState } from 'react'

import './App.css'

function App() {

  // visualizar valor e alterar valor
  const [valor, setValor] = useState('Bruno')

  const handleChange = (event) => {
    setValor(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Valor do input com React</h1>
      <input type="text" value={valor} onChange={handleChange} />
      <p>{valor}</p>
    </div>
  )
}

export default App
