/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'http://localhost:3000/noticias'

const NoticiasAxios = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await axios.get(url)
        setNoticias(response.data)
      }catch(error){
        console.error("Erro ao buscar noticias: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Notícias</h1>
      <ul>
        {noticias.map((noticia) =>(
          <li key={noticia.id}>
            <h2><Link to={`/visualiza-noticia/${noticia.id}`}>{noticia.titulo}</Link></h2>
            <h3>{noticia.subtitulo}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoticiasAxios