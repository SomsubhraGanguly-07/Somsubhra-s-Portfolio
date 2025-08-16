import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialIcons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/AuqaEclipse" },
    { icon: <FaEnvelope />, link: "mailto:somsubhraganguly5@gmail.com" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/somsubhra-ganguly-336068294/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/mr__ganguly12__/?next=%2F&hl=en" },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          Copyright © Somsubhra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
