import React from 'react'
import './assets/Style/style.css'
import { Header } from './Components/Header/Header'
import { About } from './Components/About/About'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'

export  const App = () => {
  return(
    <div className='App'>
      <Header/>
      <h2 className='inicio'>Bienvenido a mi Portafolio</h2>
      <About/>
      <Portfolio/>
        <Contact/>  
      <Footer/>
    </div>
  )
}

export default App;