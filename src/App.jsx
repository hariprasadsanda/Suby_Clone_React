import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductDisplay from './Components/ProductDisplay'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products/:firmId/:firmName' element={<ProductDisplay/>} />
      </Routes>
    
    </div>
  )
}

export default App
