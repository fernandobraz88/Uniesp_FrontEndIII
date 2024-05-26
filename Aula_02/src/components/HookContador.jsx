/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const HookContador = () => {
  const [contador, setContador] = useState(1);

  function incrementarContador(){
    setContador(contador + 1);
  }

  return (
    <div>
    <p>Contador: {contador}</p>

    <button onClick={incrementarContador}>Incrementar</button></div>
  )
}

export default HookContador