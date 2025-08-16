import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaArrowUp, FaUser, FaBolt, FaProjectDiagram, FaEnvelope, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    // { id: "blogs", label: "Blogs", icon: <FaBlog /> }, // Uncomment and add icon if you have a Blogs section
    { id: "skills", label: "Skills", icon: <FaBolt /> },
    { id: "work", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className={`text-white flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-2" : "py-5"}`}>
          {/* Logo */}
          <div>
            <img
              src="/assets/Logo.png"
              alt="Somsubhra Ganguly"
              className={`object-cover transition-all duration-300 ${isScrolled ? "h-12" : "h-20"}`}
              style={{ display: "inline-block" }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="flex items-center">
                  <span className="text-lg mr-2">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/SomsubhraGanguly-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/somsubhra-ganguly-336068294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)} className="flex items-center">
                    <span className="text-lg mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SomsubhraGanguly-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/somsubhra-ganguly-336068294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
      {/* Scroll to Top Arrow (fixed at bottom right) */}
      {showScrollTop && (
        <div className="fixed bottom-4 right-4 z-50 group">
          <button
            onClick={scrollToTop}
            className="bg-[#8245ec] text-white p-3 rounded-full shadow-lg hover:bg-[#6d37c6] transition-transform duration-200 transform hover:scale-125"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
          <span className="absolute right-1/2 bottom-14 translate-x-1/2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Scroll to top
          </span>
        </div>
      )}
    </>
  );
};

export default Navbar;
