import React, { useEffect, useRef } from "react";
import RealEstate from '../assets/img/projects/RealEstate.png';
import ChatApp from '../assets/img/projects/ChatApp.png';
import WeatherApp from '../assets/img/projects/WeatherApp.png';
import ECommerceApp from '../assets/img/projects/ECommerceApp.png';

export default function Portfolio({ mode }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700", "ease-out");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));
  
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [mode]); // Add mode as a dependency
  

  const projects = [
    {
      title: "Real Estate App",
      description: "A full-stack real estate app using Firebase and Google OAuth, Redux Toolkit for secure authentication, real-time updates, and seamless property listing, booking, and management.",
      liveDemo: "#",
      github: "https://github.com/Hamza-73/real_estate_mern_app",
      image: RealEstate,
    },
    {
      title: "Chat APP",
      description: "A real-time chat app built with MERN and Sockets, enabling instant messaging with seamless connectivity.",
      liveDemo: "#",
      github: "https://github.com/Hamza-73/chat-app",
      image: ChatApp,
    },
    {
      title: "Weather App",
      description: "A React.js weather app using OpenWeather API to provide real-time weather updates with a clean UI.",
      liveDemo: "#",
      github: "https://github.com/Hamza-73/weatherapp",
      image: WeatherApp,
    },
    {
      title: "E Commerce App",
      description: "A simple e-commerce app built with HTML, CSS, and JavaScript, featuring login/signup functionality for a seamless shopping experience.",
      liveDemo: "#",
      github: "https://github.com/Hamza-73/E-commerce-Website",
      image: ECommerceApp,
    },
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 px-4 lg:px-20">
      <h2 className={`text-3xl font-semibold text-center ${mode === 'dark' ? "text-[#3273b4]" : "text-[#2C3E50]"} mb-12`}>
        My Projects
      </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card p-6 rounded-lg text-center opacity-0 transform translate-y-10 transition-all duration-700 ease-out
            ${mode === 'dark' ? "bg-[#2C3E50] text-[#F0F4F5] shadow-[0_4px_10px_rgba(255,255,255,0.2)]" 
            : "bg-white text-[#2C3E50] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"} 
            hover:scale-105 lg:hover:scale-105`}
            onClick={(e) => {
              // Only trigger click effect on small & medium screens
              if (window.innerWidth < 1024) {
                e.currentTarget.classList.add("scale-105");
                setTimeout(() => {
                  e.currentTarget.classList.remove("scale-105");
                }, 300);
              }
            }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-all duration-300 hover:scale-110"
              />
            </div>
  
            {/* Title and Description */}
            <h3 className={`text-xl font-bold ${mode === 'dark' ? "text-[#F0F4F5]" : "text-[#2C3E50]"}`}>{project.title}</h3>
            <p className={`text-sm ${mode === 'dark' ? 'text-white' : "text-gray-600"} my-2`}>{project.description}</p>
  
            {/* Links */}
            <div className="mt-4 flex justify-center gap-4">
              {/* <a
                href={project.liveDemo}
                className="bg-[#3273b4] text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#2C3E50]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a> */}
              <a
                href={project.github}
                className="border border-[#3273b4] text-[#3273b4] px-4 py-2 rounded-md transition duration-300 hover:bg-[#3273b4] hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );  
}
