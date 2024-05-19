import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectectedRoute from './components/ProtectectedRoute'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/success' element = {<ProtectectedRoute element={<Success/>}/>}/>
        <Route path='/*' element = {<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App