import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact({ mode }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-16 px-6 lg:px-20 text-center fade-out border-t border-b border-gray-300 shadow-sm 
        ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}
    >
      <h2 className={`text-3xl font-semibold mb-6 ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}>
        Get in Touch
      </h2>

      <p className={`text-lg opacity-90 mb-8 ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}>
        Feel free to reach out for any opportunities or inquiries.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* Email */}
        <a
          href="mailto:ameerhamzakhan9744@gmail.com"
          className={`flex items-center gap-3 text-lg hover:text-[#3273b4] transition-all duration-300 ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}
        >
          <FaEnvelope className={`text-2xl ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#3273b4]'}`} />
          ameerhamzakhan9744@gmail.com
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-12 h-12 rounded-full text-2xl transition-all duration-300 
            ${mode === 'dark' ? 'bg-[#3273b4] text-white hover:bg-[#2C3E50]' : 'bg-[#2C3E50] text-white hover:bg-[#3273b4]'}`}
        >
          <FaLinkedin />
        </a>

        {/* Phone */}
        <a
          href="tel:+923220401223"
          className={`flex items-center gap-3 text-lg hover:text-[#3273b4] transition-all duration-300 ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}
        >
          <FaPhone className={`text-2xl ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#3273b4]'}`} />
          +92 322 0401223
        </a>

        {/* Location */}
        <div className={`flex items-center gap-3 text-lg opacity-90 ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#2C3E50]'}`}>
          <FaMapMarkerAlt className={`text-2xl ${mode === 'dark' ? 'text-[#F0F4F5]' : 'text-[#3273b4]'}`} />
          Lahore, Pakistan
        </div>
      </div>
    </section>
  );
}
