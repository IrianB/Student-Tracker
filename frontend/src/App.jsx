import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/layout' element={<Layout />} />
    </Routes >
  )
}

export default App