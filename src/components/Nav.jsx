import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { RiServiceFill, RiMessage2Fill } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Nav({ mode, toggleMode }) {
    const [active, setActive] = useState('#');
    const [iconRotating, setIconRotating] = useState(false);

    const navItems = [
        { id: "#", icon: <IoMdHome className="w-6 h-6 sm:w-5 sm:h-5" />, label: "Home" },
        { id: "#about", icon: <FaUser className="w-6 h-6 sm:w-5 sm:h-5" />, label: "About" },
        { id: "#experience", icon: <LuBookMarked className="w-6 h-6 sm:w-5 sm:h-5" />, label: "Experience" },
        { id: "#portfolio", icon: <RiServiceFill className="w-6 h-6 sm:w-5 sm:h-5" />, label: "Portfolio" },
        { id: "#contact", icon: <RiMessage2Fill className="w-6 h-6 sm:w-5 sm:h-5" />, label: "Contact" }
    ];

    const handleToggleMode = () => {
        setIconRotating(true);
        setTimeout(() => {
            toggleMode();
            setIconRotating(false);
        }, 500); // Delay to finish the rotation animation
    };

    return (
        <section id='sidebar' className="fixed top-1/2 right-0 sm:right-4 transform -translate-y-1/2 z-10">
            {/* Sidebar navigation items */}
            <div className={`${mode === 'dark' ? "bg-[#2C3E50]" : "bg-[#3273b4]"} backdrop-blur-[15px] 
                w-14 sm:w-16 py-4 sm:py-3 rounded-full shadow-lg flex flex-col items-center space-y-4 sm:space-y-2`}>

                {/* Mode toggle button (moon/sun icon) */}
                <div
                    className={`mb-2 sm:mb-4 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full cursor-pointer 
                        transition-all duration-300 ${mode === 'dark' ? 'bg-[#2C3E50]' : 'bg-[#FFF]'}`}
                    onClick={handleToggleMode}
                >
                    <div className={`transform transition-transform duration-500 ${iconRotating ? 'rotate-180' : ''}`}>
                        {mode === 'dark' ? (
                            <FaMoon className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <FaSun className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </div>
                </div>

                {navItems.map((item) => (
                    <div key={item.id} className="relative group">
                        <a href={item.id}
                            className={`${active === item.id ? "bg-[rgba(231,219,219,0.3)]" : ""} 
                                flex justify-center items-center w-12 sm:w-10 h-12 sm:h-10 p-2 sm:p-1 text-gray-100 
                                rounded-full cursor-pointer hover:bg-[rgba(231,219,219,0.3)] transition-all`}
                            onClick={() => setActive(item.id)}>
                            {item.icon}
                        </a>
                        {/* Tooltip */}
                        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 
                            bg-[#2C3E50] text-white text-xs font-medium px-2 py-1 rounded-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
