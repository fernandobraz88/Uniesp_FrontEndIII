/* eslint-disable no-unused-vars */
import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <p>num1 = 6</p>
      <p>num2 = 2</p>
      <Adicao num1={6} num2={2} />
      <Subtracao num1={6} num2={2} />
      <Multiplicacao num1={6} num2={2} />
      <Divisao num1={6} num2={2} />
    </div>
  )
}

export default App