import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Somsubhra Ganguly
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full-stack Developer',
                'MERN Stack Developer',
                'Web Developer',
                'Software Engineer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate full-stack developer skilled in building scalable and user-friendly web applications. Proficient in both front-end and back-end development, I specialize in the MERN stack and modern technologies to create seamless user experiences and efficient solutions. I am eager to contribute my skills to real-world projects and continuously grow as a developer.
          </p>
          {/* Resume Button - Styled like the provided image */}
          <a
            href="https://drive.google.com/file/d/19KdpaCrrY3QlYiVu-qJJWpvR5o39LdFm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white py-3 px-8 rounded-lg mt-5 text-base font-semibold transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8245ec] shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #3a2fa4 0%, #8245ec 50%, #a855f7 100%)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            {/* Modern Paperclip SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M16.24 7.76 8.1 15.9a3 3 0 1 0 4.24 4.24l7.07-7.07a5 5 0 0 0-7.07-7.07l-8.49 8.49" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="tracking-wide font-bold">VIEW MY RESUME</span>
            {/* Arrow SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-4-4m4 4-4 4"/>
            </svg>
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Somsubhra Ganguly"
              className="w-full h-full object-cover rounded-2xl"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
