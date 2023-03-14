import { useEffect, useState, useContext } from 'react'
import './App.css'
import Screen from './Layouts/screen'
import Navbar from './Layouts/navbar'
import MainThread from './Layouts/maintread'
import LastSpace from './Layouts/notification'
import Global_Context from './context/context_Globla'



export default function App() {

  const data = useContext(Global_Context)

  

  return (
    <div className="App">
      <Screen>
        <Navbar />
        <MainThread />
        <LastSpace />
      </Screen>
    </div>
  )
}

 
