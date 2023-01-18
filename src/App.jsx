import { useState } from 'react'
import './App.css'
import Beneficiaire from './composents/Beneficiaire'
import Nav from './composents/logo'
import Anonce from './composents/Anonce'
import Screen from './Layouts/screen'
import Navbar from './Layouts/navbar'
import MainThread from './Layouts/maintread'
import LastSpace from './Layouts/notification'

export default function App() {

  return (
    <div className="App">
      <Screen>
        <Navbar />
        <MainThread />
        <LastSpace />
      </Screen>
      
      {/* <div>
        <Nav />
      </div>

      <div className='grd_div'>
        
      <div className='cote_gauche'>  
        <Navbar/>
      </div>

      <div>
      <div className='infos'>
        <Beneficiaire/>
        <Beneficiaire/>
        <Beneficiaire/>
        <Beneficiaire/>
      </div>
      <div>
        <Anonce/>
      </div>
      </div>
      

      <div className='cote_droit'>
        dghgdg
      </div>
      </div>
       */}
    </div>
  )
}

 
