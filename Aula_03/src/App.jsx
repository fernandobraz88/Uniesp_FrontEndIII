/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      Exercicio 1:
      <EstouConseguindoAprenderReact estouConseguindo={true} />
      <EstouConseguindoAprenderReact estouConseguindo={false} />
      <hr/>
      
      Exercicio 2:
      {
        [
          {nome: "Fernando", email: "fernando@gmail.com", curso: "Sistemas", media: 7},
          {nome: "Goku", email: "goku@gmail.com", curso: "Sistemas", media: 8},
          {nome: "Seiya", email: "seiya@gmail.com", curso: "Sistemas", media: 5}
        ].map((aluno) => <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} media={aluno.media} />)
      }
      
    </div>
  )
}

export default App