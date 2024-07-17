import React from 'react'
import Home from './Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Player from './Pages/Player/Player'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player/:id'element={<Player/>}/>

      </Routes>
    
    </div>
  )
}

export default App