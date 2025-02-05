import React from "react";
import HAMZA1 from '../assets/img/hamza1.png';
import CV from '../assets/docs/Ameer Hamza Resume.pdf';
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Home({ textColor, mode }) {
  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-10 overflow-x-hidden">

        {/* Left - Text Section */}
        <div
          className="text-center lg:text-left max-w-lg w-full"
          style={{
            animation: "fadeInUp 1s forwards",
            animationDelay: "0.2s",
          }}
        >
          <h1
            className="text-4xl font-bold"
            style={{
              animation: "fadeInUp 1s forwards",
              animationDelay: "0.2s",
              color: textColor, // Set dynamic text color here
            }}
          >
            Hi, I'm <span className="text-[#3273b4]">Ameer Hamza</span>
          </h1>
          <h2
            className="text-2xl font-medium mt-2"
            style={{
              animation: "fadeInUp 1s forwards",
              animationDelay: "0.4s",
              color: textColor, // Set dynamic text color here
            }}
          >
            Full-Stack Developer
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{
              animation: "fadeInUp 1s forwards",
              animationDelay: "0.6s",
              color: textColor, // Set dynamic text color here
            }}
          >
            Passionate about crafting smooth UI experiences and
            building scalable, efficient back-end solutions.
            Let's turn ideas into reality!
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a
              href={CV} download
              className="px-6 py-3 text-white bg-[#3273b4] rounded-lg shadow-md hover:bg-[#285a8a] transition-all duration-300 transform"
              onMouseEnter={(e) => {
                // Apply rotation on mouse leave
                e.target.style.transform = "rotate(-6deg)";
              }}
              onMouseLeave={(e) => {
                // Reset transform when mouse enters
                e.target.style.transform = "rotate(0deg)";
              }}
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-[#3273b4] border border-[#3273b4] rounded-lg shadow-md hover:bg-[#3273b4] hover:text-white transition-all duration-300 transform"
              onMouseEnter={(e) => {
                // Apply rotation on mouse leave
                e.target.style.transform = "rotate(6deg)";
              }}
              onMouseLeave={(e) => {
                // Reset transform when mouse enters
                e.target.style.transform = "rotate(0deg)";
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-10 relative flex items-center justify-center w-full max-w-xs lg:max-w-md">
          <img
            src={HAMZA1}
            alt="Profile"
            className={`w-full h-auto rounded-2xl shadow-lg ${mode === 'dark' ? 'shadow-[#b0b0b0]' : 'shadow-white'} transition-all duration-300 max-w-[250px] lg:max-w-[310px]`}
          />

          {/* Social Icons Container */}
          <div className="absolute top-1/2 right-[90%] sm:right-19 transform -translate-y-1/2 flex flex-col items-center gap-6">
            <div className="w-0.5 h-10 sm:h-20  bg-[#3273b4] mb-2 sm:mb-4"></div>

            {/* LinkedIn Icon */}
            <div className="relative group flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/ameer-hamza-4a8279229"
                target="_blank"
                className="text-3xl cursor-pointer text-[#3273b4] hover:text-[#285a8a] transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <span className="absolute left-full transform translate-x-4 text-sm text-[#3273b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </div>

            {/* GitHub Icon */}
            <div className="relative group flex items-center gap-6">
              <a
                href="https://github.com/Hamza-73"
                target="_blank"
                className="text-3xl cursor-pointer text-[#3273b4] hover:text-[#285a8a] transition-all duration-300"
              >
                <FaGithub />
              </a>
              <span className="absolute left-full transform translate-x-4 text-sm text-[#3273b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </div>

            {/* Resume Icon */}
            <div className="relative group flex items-center gap-6">
              <a
                href={CV} download
                target="_blank"
                className="text-3xl cursor-pointer text-[#3273b4] hover:text-[#285a8a] transition-all duration-300"
              >
                <FaFileAlt />
              </a>
              <span className="absolute left-full transform translate-x-4 text-sm text-[#3273b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Resume
              </span>
            </div>

            <div className="w-0.5 h-10 sm:h-20 bg-[#3273b4] mt-2 sm:mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
