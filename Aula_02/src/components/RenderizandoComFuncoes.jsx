/* eslint-disable no-unused-vars */
import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderizacao(oQueRenderizar) {
        return oQueRenderizar == "h1" ? <h1>Texto em h1</h1> : <h2>Texto em h2</h2>
    }

  return (
    <div>
     {escolhaDeRenderizacao('h1')}
     {escolhaDeRenderizacao('h2')}
    </div>
  )
}

export default RenderizandoComFuncoes