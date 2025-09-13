import React from 'react';
import myphoto from './image/myphoto.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black text-gray-800 mb-6">About Me</h2>
        <div className="relative inline-block">
      <img 
        src={}
        alt="Abishek S"
        className="w-36 h-36 rounded-full object-cover mx-auto mb-8 shadow-xl border-4 border-white"
      />
            <div className="absolute bottom-8 -right-4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-white">
                CS
            </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed text-left md:text-center max-w-3xl mx-auto">
          Hi, . My journey in tech started with curiosity about how websites and apps are built — and that curiosity grew into a passion for web development, UI/UX design, and AI automation.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-left md:text-center max-w-3xl mx-auto">
          Alongside my studies, I’ve been building projects that combine creativity and technology from sleek landing pages to automation workflows. Every project is a chance to learn, grow, and push my skills further. I may be a student today, but I’m working toward becoming a developer who can design impactful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
