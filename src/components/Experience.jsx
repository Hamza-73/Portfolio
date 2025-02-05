import React, { useEffect, useRef, useState } from "react";

export default function Experience({ mode }) {
    const sectionRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    document.querySelectorAll(".experience-card").forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("animate-fadeInUp");
                            card.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                        }, index * 300);
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleCardClick = (index) => {
        if (window.innerWidth < 1024) {
            setSelectedCard(index);
            setTimeout(() => {
                setSelectedCard(null);
            }, 300);
        }
    };

    const experience = [
        {
            role: "Frontend Developer",
            company: 'Fourth Industrial Revolution Inc. (4irinc)',
            period: "July 2024 - September 2024",
            icon: "💻",
            details: "Frontend Web Developer with expertise in React Js HTML, CSS, Tailwind CSS, and JavaScript to create interactive websites. Proficient in API integration and optimizing code for efficiency and maintainability.",
        },
        {
            role: "Mern Stack Intern",
            company: "Tiers Limited",
            period: "June 2024 - August 2024",
            icon: "🛠",
            details: "MERN Stack Intern, contributing to the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        },
        {
            role: "Frontend Intern",
            company: "Digital Billing Services",
            period: "October 2023 - November 2023",
            icon: "🎨",
            details: "Led end-to-end development of web applications using **React.js**, optimizing UI components and collaborating with cross-functional teams to deliver polished, efficient solutions.",
        },
    ];

    return (
        <section ref={sectionRef} id="experience" className={`py-16 px-4 lg:px-20 ${mode === 'dark' ? "text-[#3273b4]" : "text-[#2C3E50]"}`}>
            <h2 className="text-3xl font-semibold text-center mb-12">My Experience</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-gray-300 pt-8 text-center">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className={`experience-card cursor-pointer relative p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform border 
                        ${selectedCard === index ? "scale-105" : ""} 
                        ${mode === 'dark' ? "bg-[#2C3E50] text-white" : "bg-white text-[#2C3E50]"} 
                        lg:hover:scale-105 lg:hover:bg-[#3273b4] lg:hover:text-white`}
                        style={{
                            opacity: 0,
                            transform: "translateY(30px)",
                        }}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="text-5xl mb-4">{exp.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                        <p className={`text-sm opacity-80 font-extrabold mb-2`}>
                            {exp.company}
                        </p>
                        <p className="text-sm opacity-80 mb-4">{exp.period}</p>
                        <p className="text-sm opacity-90">{exp.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}