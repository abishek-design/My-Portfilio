import React, { useState, useEffect } from 'react';
import myphoto from './image/myphoto.jpg';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80; // Corresponds to h-20 in header
      const windowHeight = window.innerHeight;
      
      let currentSectionId = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - headerHeight;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if the section is within the viewport
          if (scrollY >= sectionTop && scrollY < sectionBottom - (windowHeight / 4)) {
            currentSectionId = section.id;
            break;
          }
        }
      }
      // Fallback for the last section if scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          const lastSection = sections[sections.length - 1];
          if (lastSection) {
              currentSectionId = lastSection.id;
          }
      }
      
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Corresponds to h-20 in header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };


  return (
    <header className="bg-gray-50/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold text-[#8B5CF6]">Abishek S.</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-semibold transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 ${activeSection === link.href.substring(1) ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#8B5CF6]'}`}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#footer" onClick={(e) => handleNavClick(e, '#footer')} className="cursor-pointer px-6 py-3 text-md font-semibold text-white bg-[#8B5CF6] rounded-lg shadow-md hover:bg-purple-700 transition-all transform hover:scale-105">
              Let's Talk
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-semibold cursor-pointer transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-white bg-[#8B5CF6]' : 'text-gray-600 hover:text-[#8B5CF6]'}`}>
              {link.name}
            </a>
          ))}
          <a href="#footer" onClick={(e) => handleNavClick(e, '#footer')} className="cursor-pointer text-white bg-[#8B5CF6] hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium text-center">
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};


const MainPortfolio: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

// Add fade-in animation to tailwind config or a global style if possible.
// For this self-contained example, we'll define it in index.html,
// but it's better to add it to tailwind.config.js if you have one.
// Let's add it via a style tag in this component for demonstration.
const AnimationStyles = () => (
    <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out;
        }
    `}</style>
);
// A wrapper component to include styles
const MainPortfolioWithStyles: React.FC = () => (
    <>
        <AnimationStyles />
        <MainPortfolio />
    </>
);


export default MainPortfolioWithStyles;