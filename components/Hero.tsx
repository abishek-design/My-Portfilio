import React from 'react';
import myphoto from './image/myphoto.jpg';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


const Hero: React.FC = () => {

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Must match header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
              Hi, I'm <span className="text-[#8B5CF6]">Abishek S</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mt-2">
              UI/UX, Web Dev & AI Automation
            </h2>
            <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto md:mx-0">
              I started my journey exploring how design meets technology — and today, I combine web development, UI/UX design, and AI automation to bring that vision to life. I love solving problems with creativity and building experiences that leave a lasting impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="cursor-pointer px-8 py-3 text-lg font-semibold text-white bg-[#8B5CF6] rounded-lg shadow-md hover:bg-purple-700 transition-all transform hover:scale-105">
                See Projects
              </a>
            </div>
             <div className="mt-10 flex justify-center md:justify-start space-x-6">
              <a href="https://www.linkedin.com/in/abishek64" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#8B5CF6] transition-colors">
                <LinkedInIcon />
              </a>
               <a href="https://github.com/abishek-design" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#8B5CF6] transition-colors">
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
             <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <img 
                      src={myphoto}
                      alt="Abishek S"
                      className="rounded-full object-cover w-full h-full shadow-2xl z-10 relative"
                />
                 {/* Decorative shapes */}
                <div className="absolute -top-5 -left-5 w-full h-full border-8 border-purple-300 rounded-full opacity-50 z-0 animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-cyan-300 rounded-full opacity-50 z-0"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;