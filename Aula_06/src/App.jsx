/* eslint-disable no-unused-vars */
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import NavBar from './components/NavBar'
import VisualizaNoticia from './pages/VisualizaNoticia'
import NoticiasAxios from './pages/NoticiasAxios'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <img src='../uniesplogo.jpg' />
        <br />
        <br />
        <hr />

        <Routes>
          <Route path='/' element= {<Inicial/>} />
          <Route path='/a-faculdade' element={<Afaculdade/>} />
          <Route path='/dpo-lgpd' element={<DpoLgpd/>} />
          <Route path='/noticias' element={<NoticiasAxios />} />
          <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App