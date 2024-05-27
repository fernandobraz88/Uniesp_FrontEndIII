/* eslint-disable no-unused-vars */
import React from 'react'
import Exercicio01 from './components/Exercicio01'
import Exercicio02 from './components/Exercicio02'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      <Exercicio01/>
      <br/>
      <Exercicio02/>
      <br />
      <Campanha mes = 'setembro' />
      <Campanha mes = 'outubro' />
      <Campanha mes = 'novembro' />

    </div>
  )
}

export default App