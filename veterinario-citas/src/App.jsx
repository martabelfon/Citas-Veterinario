import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
