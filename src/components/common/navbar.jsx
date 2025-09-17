import React, { useState, useEffect, useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ThemeContext } from '../../App';
import links from '../../data/DownloadLinks';

// Mock letterD image - replace with your actual import
const LetterD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23dbeafe'/%3E%3Ctext x='20' y='28' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' fill='%231e40af'%3ED%3C/text%3E%3C/svg%3E";


// Animated Theme Toggle Component
const AnimatedThemeToggle = ({ theme, toggleTheme }) => {
  const toggleRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const cloudRef = useRef(null);
  const starsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    
    // Animation timeline for theme transition
    tl.to(toggleRef.current, {
      backgroundColor: theme === 'dark' ? '#1f2937' : '#f3f4f6',
      duration: 0.5,
      ease: 'power2.out'
    })
    .to(sunRef.current, {
      x: theme === 'dark' ? -40 : 0,
      rotation: theme === 'dark' ? -180 : 0,
      scale: theme === 'dark' ? 0.3 : 1,
      opacity: theme === 'dark' ? 0 : 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, 0)
    .to(moonRef.current, {
      x: theme === 'dark' ? 0 : 40,
      rotation: theme === 'dark' ? 0 : 180,
      scale: theme === 'dark' ? 1 : 0.3,
      opacity: theme === 'dark' ? 1 : 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, 0)
    .to(cloudRef.current, {
      x: theme === 'dark' ? -20 : 20,
      opacity: theme === 'dark' ? 0.3 : 0.8,
      duration: 0.8,
      ease: 'sine.inOut'
    }, 0.1)
    .to(starsRef.current.children, {
      opacity: theme === 'dark' ? 1 : 0,
      scale: theme === 'dark' ? 1 : 0,
      stagger: 0.1,
      duration: 0.4,
      ease: 'back.out(2)'
    }, 0.3);

    tl.play();

    // Hover animations
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(sunRef.current, {
      rotation: '+=30',
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(moonRef.current, {
      rotation: '+=20',
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    }, 0)
    .to(starsRef.current.children, {
      scale: 1.2,
      stagger: 0.02,
      duration: 0.2,
      ease: 'back.out(3)'
    }, 0.1);

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    const toggle = toggleRef.current;
    toggle.addEventListener('mouseenter', handleMouseEnter);
    toggle.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      toggle.removeEventListener('mouseenter', handleMouseEnter);
      toggle.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <button
      ref={toggleRef}
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 overflow-hidden"
      aria-label="Toggle dark mode"
      style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#f3f4f6' }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 via-blue-200 to-purple-300 opacity-20"></div>
      
      <svg 
        width="64" 
        height="32" 
        viewBox="0 0 64 32" 
        className="absolute inset-0"
      >
        {/* Sun */}
        <g ref={sunRef} transform="translate(8, 16)">
          <circle 
            cx="0" 
            cy="0" 
            r="6" 
            fill="url(#sunGradient)"
            className="drop-shadow-sm"
          />
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="-10"
              x2="0"
              y2="-12"
              stroke="url(#rayGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${i * 45})`}
              className="animate-pulse"
            />
          ))}
        </g>

        {/* Moon */}
        <g ref={moonRef} transform="translate(56, 16)" opacity="0">
          <circle 
            cx="0" 
            cy="0" 
            r="6" 
            fill="url(#moonGradient)"
            className="drop-shadow-sm"
          />
          {/* Moon craters */}
          <circle cx="-2" cy="-2" r="1.5" fill="url(#craterGradient)" opacity="0.6"/>
          <circle cx="2" cy="1" r="1" fill="url(#craterGradient)" opacity="0.4"/>
          <circle cx="-1" cy="3" r="0.8" fill="url(#craterGradient)" opacity="0.3"/>
        </g>

        {/* Floating cloud */}
        <g ref={cloudRef} transform="translate(32, 20)" opacity="0.8">
          <ellipse cx="0" cy="0" rx="4" ry="2" fill="white" opacity="0.6"/>
          <circle cx="-3" cy="-1" r="1.5" fill="white" opacity="0.7"/>
          <circle cx="3" cy="-1" r="1.2" fill="white" opacity="0.5"/>
        </g>

        {/* Stars */}
        <g ref={starsRef}>
          {[
            { x: 12, y: 8 },
            { x: 20, y: 12 },
            { x: 44, y: 6 },
            { x: 52, y: 24 },
            { x: 40, y: 26 }
          ].map((star, i) => (
            <g key={i} transform={`translate(${star.x}, ${star.y})`} opacity="0">
              <path
                d="M0,-3 L1,0 L3,0 L1,1.5 L2,4 L0,2.5 L-2,4 L-1,1.5 L-3,0 L-1,0 Z"
                fill="url(#starGradient)"
                className="drop-shadow-sm"
              />
            </g>
          ))}
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb"/>
            <stop offset="100%" stopColor="#9ca3af"/>
          </linearGradient>
          <linearGradient id="craterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280"/>
            <stop offset="100%" stopColor="#4b5563"/>
          </linearGradient>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Toggle switch indicator */}
      <div 
        className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 shadow-lg ${
          theme === 'dark' 
            ? 'left-9 bg-gradient-to-br from-slate-300 to-slate-500' 
            : 'left-1 bg-gradient-to-br from-yellow-300 to-yellow-500'
        }`}
      >
        <div className="absolute inset-1 rounded-full bg-white/30 animate-pulse"></div>
      </div>
    </button>
  );
};

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

    // Mobile Menu Animation Timeline with enhanced effects
    mobileMenuTimeline.current = gsap.timeline({ paused: true })
      .to('.mobile-menu-container', {
        duration: 0.6,
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        ease: 'back.out(1.4)'
      })
      .from('.mobile-menu-item', {
        duration: 0.5,
        opacity: 0,
        x: -50,
        stagger: 0.08,
        ease: 'back.out(2)'
      }, "-=0.3")
      .from('.mobile-theme-toggle', {
        duration: 0.4,
        scale: 0,
        rotation: 180,
        ease: 'back.out(2)'
      }, "-=0.2");

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

        {/* Enhanced Mobile Menu */}
        <div className="mobile-menu-container lg:hidden fixed top-20 left-0 w-full z-40 opacity-0 translate-y-[-20px] pointer-events-none">
          <div className="mx-4 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-100/50 dark:shadow-gray-800/50 border border-white/20 dark:border-gray-600/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div 
                className="shape w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
              />
            </div>
            
            <div className="relative p-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  {...(item.isDownload && { download: true })}
                  className="mobile-menu-item group block py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 relative overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative flex items-center justify-between">
                    <span className="text-lg font-light text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.label}
                    </span>
                    <div 
                      className="shape w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </a>
              ))}
              
              {/* Mobile Enhanced Theme Toggle */}
              <div className="mobile-theme-toggle mt-6 pt-6 border-t border-gray-100 dark:border-gray-600 flex justify-center">
                <AnimatedThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
              
              <div className="mt-4 flex justify-center space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
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