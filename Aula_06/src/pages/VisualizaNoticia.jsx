/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const VisualizaNoticia = () => {

    const {id} = useParams()

    const url = `http://localhost:3000/noticias/${id}`

    const [visualizaNoticia,setVisualizaNoticia] = useState({})

    useEffect(()=>{
        async function fetchData(){
          const response = await fetch(url)
          const data = await response.json()
    
          setVisualizaNoticia(data)
        }
        fetchData()
      }, [])

  return (
    <div>
        <h2>{visualizaNoticia.titulo}</h2>
        <h3>{visualizaNoticia.subtitulo}</h3>
        <p>{visualizaNoticia.texto}</p>
    </div>
  )
}

export default VisualizaNoticia