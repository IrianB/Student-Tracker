import React, { useState } from 'react'
import logo from '../assets/react.svg'
import Layout from '../pages/Layout'

const LayoutHeader = () => {

    return (

        <header className="w-full bg-[#EA2F14] shadow-lg">
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
            </div>
        </header>
    )
}

export default LayoutHeader
