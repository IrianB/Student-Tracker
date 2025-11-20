import React, { useEffect, useState } from 'react'
import LayoutHeader from '../components/LayoutHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from '../axios/axios'

const Layout = () => {

  const [student, setStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const navItems = [
    "Message",
    "Section Offering",
    "Profile",
    "Registration",
    "Grades",
    "Account",
    "Calendar",
    "Faculty Evaluation",
    "Password",
    "Schedule",
    "Curriculum/Evaluation",
    "Announcement",
    "Student Handbook"
  ]

  const handleNavigate = (item) => {
    if (item === "Calendar") {
      navigate('/layout/calendar')
    }
  }

  const fetchStudent = async () => {
    try {
      const id = localStorage.getItem('studentId')
      const response = await axios.get(`/student/${id}`)
      setStudent(response.data)
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching student data:', error)
    }
  }

  useEffect(() => {
    fetchStudent().finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-[#FFF7E6]">
      <LayoutHeader />

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap justify-center items-center gap-3 px-3 py-2">

          {navItems.map((item) => (
            <button
              onClick={() => handleNavigate(item)}
              key={item}
              className="
              px-3 py-1.5 text-xs font-semibold 
              text-[#FCEF91] 
              bg-[#EA2F14] 
              rounded-md whitespace-nowrap cursor-pointer 
              transition-all duration-200
              hover:bg-[#E6521F]
              hover:scale-105
              hover:text-white
              border border-[#FB9E3A]
            "
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      <div className="mt-5 flex items-center justify-between mx-10 mb-6">
        <h3 className="text-[#EA2F14] font-semibold">
          Welcome, {student.lastName.toUpperCase()}, {student.firstName.toUpperCase()} {student.middleName.toUpperCase()} (ID Number: {student.idNumber})
        </h3>

        <button className="px-6 py-2 bg-[#EA2F14] text-[#FCEF91] font-bold rounded-lg hover:bg-[#E6521F] transition">
          Logout
        </button>
      </div>

      <Outlet />

    </div>
  )

}

export default Layout