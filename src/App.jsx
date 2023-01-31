import { useState } from 'react'
import './App.css'
import Screen from './Layouts/screen'
import Navbar from './Layouts/navbar'
import MainThread from './Layouts/maintread'
import LastSpace from './Layouts/notification'
import Header from './Layouts/Header'

export default function App() {

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

 
