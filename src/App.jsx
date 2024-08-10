import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Funct from './Funct'


function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Class btn
  </h1>
  <Name name="richard"/>
  <h1>function btn</h1>
  <Funct/>
    </>
  )
}


export default App
