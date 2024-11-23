import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Room from './component/Room'
import { Route, Routes } from 'react-router-dom'
import Counter from './component/Counter'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:id" element={<Room />}></Route>
     
      </Routes> 

    
    </>
  )
}

export default App
