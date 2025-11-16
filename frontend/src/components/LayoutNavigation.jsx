import React from 'react'

const LayoutNavigation = () => {
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

    return (
        <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap justify-center items-center gap-3 px-3 py-2">

                {navItems.map((item) => (
                    <button
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
    )
}

export default LayoutNavigation
