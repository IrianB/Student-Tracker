import React, { useState } from 'react'
import logo from '../assets/react.svg'
import RegisterModal from '../pages/Modals/RegisterModal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <header className="w-full bg-[#EA2F14] shadow-lg">
            <RegisterModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            >

            </RegisterModal>
            <div className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="CIT-U Logo"
                        className="w-14 h-14 rounded-full border-4 border-[#FB9E3A] shadow-md"
                    />

                    <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md text-[#FCEF91]">
                        Cebu Institute of Technology - University
                    </h1>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="cursor-pointer w-50 py-2 rounded-lg text-white font-semibold shadow-md transition duration-200 bg-[#FB9E3A] hover:bg-[#E6521F]"
                >
                    Register Account
                </button>
            </div>
        </header>
    )
}

export default Header
