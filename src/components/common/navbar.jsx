import React, { useState, useEffect, useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ThemeContext } from '../../App';
import links from '../../data/DownloadLinks';
import AnimatedThemeToggle from './AnimatedThemeToggle';

// Mock letterD image - replace with your actual import
const LetterD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23dbeafe'/%3E%3Ctext x='20' y='28' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' fill='%231e40af'%3ED%3C/text%3E%3C/svg%3E";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const container = useRef(null);
  const mobileMenuTimeline = useRef(null);

  // Effect for handling scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // Entrance animation
    gsap.from('.logo', { opacity: 0, scale: 0.5, duration: 0.8, ease: 'back.out(1.7)', delay: 0.3 });
    gsap.from('.nav-item', {
      opacity: 0,
      y: -30,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power2.out'
    });

    // Continuous rotation for background shapes
    gsap.to('.shape', {
      rotation: '+=360',
      duration: 40,
      repeat: -1,
      ease: 'none',
      stagger: 5
    });

    // Enhanced mouse-follow animation
    const quickToShape1X = gsap.quickTo('.shape-1', 'x', { duration: 0.7, ease: 'power3' });
    const quickToShape1Y = gsap.quickTo('.shape-1', 'y', { duration: 0.7, ease: 'power3' });
    const quickToShape2X = gsap.quickTo('.shape-2', 'x', { duration: 0.5, ease: 'power3' });
    const quickToShape2Y = gsap.quickTo('.shape-2', 'y', { duration: 0.5, ease: 'power3' });
    const quickToShape3X = gsap.quickTo('.shape-3', 'x', { duration: 0.4, ease: 'power3' });
    const quickToShape3Y = gsap.quickTo('.shape-3', 'y', { duration: 0.4, ease: 'power3' });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      quickToShape1X(clientX * 0.03);
      quickToShape1Y(clientY * 0.03);
      quickToShape2X(clientX * -0.02);
      quickToShape2Y(clientY * 0.02);
      quickToShape3X(clientX * 0.025);
      quickToShape3Y(clientY * -0.02);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Mobile Menu Animation Timeline - REDESIGNED
    mobileMenuTimeline.current = gsap.timeline({ paused: true })
      .to('.mobile-menu-container', {
        duration: 0.5,
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        ease: 'cubic.out'
      }, 0)
      .to('.mobile-menu-bg', {
        duration: 0.4,
        opacity: 1,
        ease: 'power2.out'
      }, 0)
      .from('.mobile-menu-item', {
        duration: 0.4,
        opacity: 0,
        y: -30,
        scale: 0.9,
        stagger: 0.06,
        ease: 'back.out(1.5)'
      }, 0.1)
      .from('.mobile-theme-toggle', {
        duration: 0.35,
        opacity: 0,
        scale: 0.8,
        ease: 'back.out(1.5)'
      }, 0.3);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, { scope: container });

  // Trigger mobile menu timeline
  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuTimeline.current?.play();
    } else {
      mobileMenuTimeline.current?.reverse();
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact Us" },
    { href: links.downloadCV, label: "Download CV", isDownload: true }
  ];

  return (
    <div ref={container}>
      {/* Enhanced Background Morphing Shapes */}
      <div className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none overflow-hidden">
        <div 
          className="shape shape-1 absolute w-96 h-96 opacity-15"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(45deg, #1e40af, #7c3aed, #0891b2, #dc2626)' 
              : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #f59e0b)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            left: '-150px',
            top: '-250px',
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="shape shape-2 absolute w-80 h-80 opacity-12"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #dc2626, #b91c1c, #7c3aed, #0891b2)'
              : 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6, #06b6d4)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            right: '-150px',
            top: '-200px',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="shape shape-3 absolute w-64 h-64 opacity-8"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(90deg, #0891b2, #1e40af, #7c3aed)'
              : 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
            borderRadius: '50% 20% 80% 30% / 70% 50% 30% 60%',
            left: '50%',
            top: '-180px',
            marginLeft: '-128px'
          }}
        />
      </div>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-blue-100/50 dark:shadow-gray-800/50' 
          : 'bg-blue-50/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg'
      }`}>
        
        <nav className="flex flex-row justify-between items-center px-4 md:px-8 py-4 w-full relative">
          
          {/* Enhanced Logo Section */}
          <div className="logo flex items-center text-xl md:text-2xl font-light mb-0 group cursor-pointer z-20">
            <div className="relative">
              <img 
                src={LetterD} 
                alt="D" 
                className="bg-blue-50 dark:bg-gray-700 w-10 h-10 mr-3 rounded-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-md" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-25 transition-all duration-300 blur-lg scale-110"></div>
            </div>
            
            <span className="font-light relative overflow-hidden">
              <span className="font-semibold block transition-transform duration-300 group-hover:translate-y-[-100%] text-black dark:text-white">
                Divyansh Gupta
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:translate-y-[-100%] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-medium">
                Divyansh Gupta
              </span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex flex-row gap-6 xl:gap-10 text-lg relative">
            <div 
              className={`absolute top-0 h-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-2xl transition-all duration-400 ease-out backdrop-blur-md border border-white/20 dark:border-gray-600/20 ${
                activeItem ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                left: activeItem ? `${activeItem}px` : '0px',
                width: activeItem ? '120px' : '0px',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
              }}
            />
            
            {navItems.map((item, index) => (
              <li key={index} className="nav-item relative group">
                <a
                  href={item.href}
                  {...(item.isDownload && { download: true })}
                  className="relative text-black dark:text-white font-light px-4 py-2 block transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 z-10"
                  onMouseEnter={(e) => setActiveItem(e.target.offsetLeft)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  <span className="relative overflow-hidden block">
                    <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">
                      {item.label}
                    </span>
                    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:translate-y-[-100%] font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {item.label}
                    </span>
                  </span>
                  
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 group-hover:w-full group-hover:left-0 transition-all duration-400 ease-out">
                    <div 
                      className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out group-hover:shadow-xl group-hover:shadow-blue-200 dark:group-hover:shadow-blue-800 rounded-full"
                      style={{
                        transform: `scaleY(${activeItem ? 1.5 : 1})`
                      }}
                    ></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/8 group-hover:via-purple-400/8 group-hover:to-cyan-400/8 rounded-xl transition-all duration-400 blur-xl"></div>
                </a>
                
                <div 
                  className="shape absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    transform: `scale(${activeItem ? 1.2 : 1})`
                  }}
                />
              </li>
            ))}
            
            {/* Enhanced Animated Theme Toggle */}
            <li className="flex items-center ml-6">
              <AnimatedThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </li>
          </ul>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-all duration-300 hover:scale-110 hover:shadow-lg z-20"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center justify-center space-y-1.5">
              <div 
                className={`w-5 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <div 
                className={`w-5 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div 
                className={`w-5 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Enhanced Mobile Menu - REDESIGNED */}
        <div className="mobile-menu-container lg:hidden fixed top-20 left-0 w-full z-60 opacity-0 -translate-y-5 pointer-events-none">
          {/* Backdrop blur overlay */}
          <div className="mobile-menu-bg fixed inset-0 top-20 bg-black/0 backdrop-blur-none opacity-0 z-[-1]"></div>
          
          {/* Menu Content */}
          <div className="mx-3 sm:mx-4 mt-3 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-blue-200/40 dark:shadow-gray-900/60 border border-white/40 dark:border-gray-700/40 overflow-hidden relative">
            {/* Decorative gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"></div>
            
            {/* Menu Items Container */}
            <div className="p-4 sm:p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  {...(item.isDownload && { download: true })}
                  className="mobile-menu-item group flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-light text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-colors relative overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Background accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-colors"></div>
                  
                  {/* Text and icon */}
                  <div className="relative flex items-center flex-1">
                    {/* Animated left accent line */}
                    <div className="w-1 h-0 group-hover:h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3 transition-all duration-300"></div>
                    <span className="relative">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Hover arrow */}
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 relative text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-4 sm:mx-6"></div>

            {/* Theme Toggle Section */}
            <div className="mobile-theme-toggle p-4 sm:p-6 flex flex-col items-center space-y-4">
              <span className="text-xs sm:text-sm font-light text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Theme
              </span>
              <AnimatedThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            {/* Decorative dots at bottom */}
            <div className="pb-4 sm:pb-6 flex justify-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-40"
                  style={{
                    animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-400 via-purple-500 to-transparent opacity-70"></div>
      </div>
      
      <div className="h-20 bg-gradient-to-b from-blue-50/50 dark:from-gray-800/50 to-transparent"></div>
    </div>
  );
};

export default Navbar;
