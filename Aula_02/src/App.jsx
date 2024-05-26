/* eslint-disable no-unused-vars */
import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/Imagens'
import HookContador from './components/HookContador'

const App = () => {
  return (
    <div>
      Exercicio 01:
      <RenderizandoComFuncoes />
      <hr />
      Exercicio 02:
      <TrabalhandoComImagens />
      <hr />
      Exercicio 03:
      <HookContador />
    </div>
  )
}

export default App