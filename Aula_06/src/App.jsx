/* eslint-disable no-unused-vars */
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import NavBar from './components/NavBar'

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
          <Route path='/noticias' element={<Noticias />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App