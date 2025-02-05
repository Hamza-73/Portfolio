import React, { useEffect, useState } from 'react';
import aboutImage from '../assets/img/about.jpg';
import htmlImg from '../assets/img/html.png';
import cssImg from '../assets/img/css.png';
import js from '../assets/img/js.png';
import ts from '../assets/img/ts.png';
import mongodb from '../assets/img/mongodb.png';
import node from '../assets/img/node.png';
import react from '../assets/img/react.png';
import redux from '../assets/img/redux.png';
import socket from '../assets/img/socket.png';
import tailwind from '../assets/img/tailwind.png';
import bootstrap from '../assets/img/bootstrap.png';

export default function About({ mode }) {
    const [isVisible, setIsVisible] = useState(false);

    // This effect will trigger when the component mounts to animate the text
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200); // Delay the animation slightly after component loads
    }, []);

    return (
        <div id="about">

            {/* About Section */}
            <section className="flex flex-col lg:flex-row items-center justify-center p-10 lg:p-20 mt-10">
                {/* Left - Image Section */}
                <div className="w-full lg:w-1/3 mb-10 lg:mb-0 lg:mr-10">
                    <img
                        src={aboutImage}
                        alt="About"
                        className="w-full h-auto shadow-lg transition-all duration-300"
                    />
                </div>

                {/* Right - Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1
                        className={`text-4xl font-bold ${mode === 'dark' ? "text-[#3273b4]" : "text-[#2C3E50]"} mb-4 transform ${isVisible ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-10'
                            } transition-all duration-1000`}
                    >
                        About Me
                    </h1>
                    <h2
                        className={`text-2xl font-medium ${mode === 'dark' ? "text-[#3273b4]" : "text-[#2C3E50]"} mb-4 transform ${isVisible ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-10'
                            } transition-all duration-1200`}
                    >
                        Full-Stack Developer | Passionate About Code
                    </h2>
                    <p
                        className={`${mode === 'dark' ? "text-white" : "text-gray-600"} text-lg leading-relaxed transform ${isVisible ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-10'
                            } transition-all duration-1400`}
                    >
                        I am a passionate Full-Stack Developer with experience in building scalable and user-friendly web applications.
                        I have a strong foundation in both front-end and back-end technologies, and I am always looking to learn and grow.
                        Let's turn ideas into reality and create seamless experiences together.
                    </p>
                </div>
            </section>

            <section className="py-10 px-4 lg:px-20 mt-10 mb-10">
                <h2 className={`text-3xl font-semibold ${mode === 'dark' ? "text-[#3273b4]" : "text-[#2C3E50]"} mb-8 text-center`}>
                    Tech Stack
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-16 justify-center items-center">

                    {/* HTML */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={htmlImg}
                            alt="HTML"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            HTML
                        </span>
                    </div>

                    {/* CSS */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={cssImg}
                            alt="CSS"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            CSS
                        </span>
                    </div>

                    {/* JavaScript */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={js}
                            alt="JavaScript"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            JavaScript
                        </span>
                    </div>

                    {/* TypeScript */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={ts}
                            alt="TypeScript"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            TypeScript
                        </span>
                    </div>

                    {/* MongoDB */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={mongodb}
                            alt="MongoDB"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            MongoDB
                        </span>
                    </div>

                    {/* Node.js */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={node}
                            alt="Node.js"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            Node.js
                        </span>
                    </div>

                    {/* React */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={react}
                            alt="React"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            React
                        </span>
                    </div>

                    {/* Redux */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={redux}
                            alt="Redux"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            Redux
                        </span>
                    </div>

                    {/* Socket.IO */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={socket}
                            alt="Socket.IO"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            Socket.IO
                        </span>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={tailwind}
                            alt="Tailwind CSS"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            Tailwind CSS
                        </span>
                    </div>

                    {/* Bootstrap CSS */}
                    <div className="group relative cursor-pointer flex flex-col justify-center items-center">
                        <img
                            src={bootstrap}
                            alt="Bootstrap CSS"
                            className="w-16 h-16 transition-transform transform hover:scale-110"
                        />
                        <span className="absolute bottom-[-40px] opacity-100 sm:opacity-0 group-hover:opacity-100 text-sm sm:bg-[#3273b4] sm:text-white p-2 transition-opacity duration-300">
                            Bootstrap CSS
                        </span>
                    </div>

                </div>
            </section>

        </div>
    );
}
