import { useState } from "react";
import axios from '../../axios/axios'

export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("Male")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [yearLevel, setYearLevel] = useState("First Year")
  const [program, setProgram] = useState("")

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    try {

      const payload = {
        firstName,
        middleName,
        lastName,
        age: Number(age),
        gender,
        username,
        password,
        address,
        yearLevel,
        program,
      };

      const res = await axios.post('/register-student', payload);
      alert("Registration Successful! Your id number is : " + res.data.idNumber)
      onClose()
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Duplicate entry! Student already exists.");
      } else {
        alert("Server error");
      }
    }
  }


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-[#FCEF91] w-full max-w-xl rounded-lg shadow-xl p-6 border-4 border-[#FB9E3A]">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-extrabold text-[#EA2F14]">
            Register an Account
          </h1>

          <button
            onClick={onClose}
            className="cursor-pointer text-[#EA2F14] font-bold text-xl hover:text-[#E6521F]"
          >
            ✕
          </button>
        </div>

        <div className="w-full border-t-4 border-[#FB9E3A] mb-4"></div>

        <form onSubmit={handleRegisterSubmit} className="grid grid-cols-2 gap-4">

          <label className="flex flex-col text-[#E6521F] font-semibold">
            First Name
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Middle Name
            <input
              onChange={(e) => setMiddleName(e.target.value)}
              type="text"
              placeholder="Middle Name"
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Last Name
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Age
            <input
              onChange={(e) => setAge(Number(e.target.value))}
              type="text"
              placeholder="Age"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Gender
            <select
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] bg-white focus:outline-none focus:border-[#EA2F14]"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Username
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold col-span-2">
            Address
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Year Level
            <select
              onChange={(e) => setYearLevel(e.target.value)}
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] bg-white focus:outline-none focus:border-[#EA2F14]"
            >
              <option value="First Year">1st</option>
              <option value="Second Year">2nd</option>
              <option value="Third Year">3rd</option>
              <option value="Fourth Year">4th</option>
            </select>
          </label>

          <label className="flex flex-col text-[#E6521F] font-semibold">
            Program
            <input
              onChange={(e) => setProgram(e.target.value)}
              type="text"
              placeholder="Program"
              required
              className="mt-1 p-2 rounded border-2 border-[#FB9E3A] focus:outline-none focus:border-[#EA2F14]"
            />
          </label>

          <button
            type="submit"
            className="cursor-pointer col-span-2 mt-3 bg-[#EA2F14] text-[#FCEF91] font-bold py-2 rounded-lg 
                       border-2 border-[#E6521F]
                       hover:bg-[#E6521F] hover:border-[#FB9E3A] transition"
          >
            Register Account
          </button>

        </form>
      </div>
    </div>
  );
}
