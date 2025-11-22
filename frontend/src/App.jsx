import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Calendar from './pages/Layout/Calendar'
import PrivateRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/layout' element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>}>
        <Route index element={<Calendar />} />
        <Route path='calendar' element={<Calendar />} />
      </Route>

    </Routes >
  )
}

export default App