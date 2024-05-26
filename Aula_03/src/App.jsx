/* eslint-disable no-unused-vars */
import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'

const App = () => {
  return (
    <div>
      Exercicio 1:
      <EstouConseguindoAprenderReact estouConseguindo={true} />
      <EstouConseguindoAprenderReact estouConseguindo={false} />
    </div>
  )
}

export default App