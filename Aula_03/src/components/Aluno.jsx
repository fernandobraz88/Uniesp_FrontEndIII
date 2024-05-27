/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Aluno = ({nome, email, curso, media}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Status: {media >= 7 ? <span>Aprovado</span> : <span>Reprovado</span>}</p>
        <p>=======================</p>
    </div>
  )
}

export default Aluno