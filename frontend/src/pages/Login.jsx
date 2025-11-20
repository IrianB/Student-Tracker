import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from '../axios/axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [idNumber, setIDNumber] = useState(null)
  const [password, setPassword] = useState(null)

  const loginSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('/checkStudent', { idNumber, password })
      const studentId = res.data._id

      localStorage.setItem('studentId', studentId)

      if(res.status === 200) {
        alert("Login successful!")
        navigate('/layout')
      }
    } catch (error) {
      if(error.response.status === 401 || error.response.status === 404)
      alert("Login failed. Please check your ID number and password.")
    }
  }

  return (
    <div className="min-h-screen bg-[#FCEF91]">
      <Header />

      <div className="flex justify-center mt-16 px-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border border-[#FB9E3A]">

          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-6 text-[#EA2F14]">
            Student Access Module
          </h1>

          <form
          onSubmit={loginSubmit} 
          className="space-y-6">

            {/* Section Header */}
            <h3 className="text-lg font-semibold text-[#E6521F]">
              User Authentication
            </h3>
            <hr className="border-[#FB9E3A]" />

            {/* Username */}
            <label className="block">
              <span className="text-sm font-medium text-[#EA2F14]">ID Number:</span>
              <input
                onChange={(e) => setIDNumber(e.target.value)}
                type="text"
                placeholder="ID Number"
                required
                className="mt-1 w-full px-3 py-2 rounded-lg border border-[#FB9E3A] focus:outline-none focus:ring-2 focus:ring-[#EA2F14] shadow-sm"
              />
            </label>

            {/* Password */}
            <label className="block">
              <span className="text-sm font-medium text-[#EA2F14]">Password:</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="mt-1 w-full px-3 py-2 rounded-lg border border-[#FB9E3A] focus:outline-none focus:ring-2 focus:ring-[#EA2F14] shadow-sm"
              />
            </label>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button
                type="submit"
                className="cursor-pointer w-full py-2 rounded-lg text-white font-semibold shadow-md transition duration-200 bg-[#EA2F14] hover:bg-[#E6521F]"
              >
                Login
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center mt-3">
              <p className="text-sm text-gray-600">
                Forgot your password?{" "}
                <a href="#" className="font-semibold text-[#E6521F] hover:underline">
                  Click here
                </a>
              </p>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
