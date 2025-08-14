import React, { useState, useEffect } from 'react';
import links from '../../data/DownloadLinks'

// Mock letterD image - replace with your actual import
const LetterD = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23dbeafe'/%3E%3Ctext x='20' y='28' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' fill='%231e40af'%3ED%3C/text%3E%3C/svg%3E";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shapeRotation, setShapeRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Continuous shape rotation
    const rotateShapes = () => {
      setShapeRotation(prev => (prev + 0.5) % 360);
    };

    const rotationInterval = setInterval(rotateShapes, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(rotationInterval);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact Us" },
    { href: links.downloadCV, label: "Download CV", isDownload: true }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
      
      {/* Background Morphing Shapes - Enhanced */}
      <div className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 opacity-15 transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #f59e0b)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px) rotate(${shapeRotation + mousePos.x * 0.02}deg)`,
            left: '-150px',
            top: '-250px',
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute w-80 h-80 opacity-12 transition-all duration-500 ease-out"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6, #06b6d4)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * 0.02}px) rotate(${-shapeRotation + mousePos.x * -0.015}deg)`,
            right: '-150px',
            top: '-200px',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-8 transition-all duration-300 ease-out"
          style={{
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
            borderRadius: '50% 20% 80% 30% / 70% 50% 30% 60%',
            transform: `translate(${mousePos.x * 0.025}px, ${mousePos.y * -0.02}px) rotate(${shapeRotation * 0.5}deg)`,
            left: '50%',
            top: '-180px',
            marginLeft: '-128px'
          }}
        />
      </div>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-100/50' 
          : 'bg-blue-50/95 backdrop-blur-sm shadow-lg'
      }`}>
        
        {/* Animated top border with enhanced effects */}
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-emerald-500 opacity-90">
          <div 
            className="h-full w-32 bg-white/50 backdrop-blur-sm transition-all duration-300 ease-out shadow-lg"
            style={{
              transform: `translateX(${mousePos.x * 0.08}px)`,
              borderRadius: '0 0 20px 20px',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
            }}
          />
          <div 
            className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/30 to-transparent transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${mousePos.x * -0.05}px)`,
              borderRadius: '0 0 15px 15px'
            }}
          />
        </div> */}

        <nav className="flex flex-row justify-between items-center px-4 md:px-8 py-4 w-full relative">
          
          {/* Logo Section with Enhanced Animation */}
          <div className="flex items-center text-xl md:text-2xl font-light mb-0 group cursor-pointer z-20">
            <div className="relative">
              <img 
                src={LetterD} 
                alt="D" 
                className="bg-blue-50 w-10 h-10 mr-3 rounded-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-md" 
              />
              {/* Logo glow effect - enhanced */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-25 transition-all duration-300 blur-lg scale-110"></div>
            </div>
            
            <span className="font-light relative overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">
                Divyansh Gupta
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:translate-y-[-100%] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-medium">
                Divyansh Gupta
              </span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex flex-row gap-6 xl:gap-10 text-lg relative">
            {/* Dynamic background indicator - enhanced */}
            <div 
              className={`absolute top-0 h-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-2xl transition-all duration-400 ease-out backdrop-blur-md border border-white/20 ${
                activeItem ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                left: activeItem ? `${activeItem}px` : '0px',
                width: activeItem ? '120px' : '0px',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
              }}
            />
            
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href}
                  {...(item.isDownload && { download: true })}
                  className="relative text-black font-light px-4 py-2 block transition-all duration-300 hover:text-blue-600 z-10"
                  onMouseEnter={(e) => setActiveItem(e.target.offsetLeft)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  {/* Text with sliding effect */}
                  <span className="relative overflow-hidden block">
                    <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">
                      {item.label}
                    </span>
                    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:translate-y-[-100%] font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {item.label}
                    </span>
                  </span>
                  
                  {/* Dynamic underline with morphing shape - enhanced */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 group-hover:w-full group-hover:left-0 transition-all duration-400 ease-out">
                    <div 
                      className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out group-hover:shadow-xl group-hover:shadow-blue-200 rounded-full"
                      style={{
                        transform: `scaleY(${activeItem ? 1.5 : 1})`
                      }}
                    ></div>
                  </div>
                  
                  {/* Hover glow effect - enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/8 group-hover:via-purple-400/8 group-hover:to-cyan-400/8 rounded-xl transition-all duration-400 blur-xl"></div>
                </a>
                
                {/* Individual item geometric accent - enhanced */}
                <div 
                  className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    transform: `rotate(${shapeRotation}deg) scale(${activeItem ? 1.2 : 1})`
                  }}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg z-20"
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

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed top-20 left-0 w-full z-40 transition-all duration-500 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-100/50 border border-white/20 overflow-hidden">
            {/* Mobile menu background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div 
                className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 transition-transform duration-700"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: `rotate(${shapeRotation}deg)`
                }}
              />
            </div>
            
            <div className="relative p-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  {...(item.isDownload && { download: true })}
                  className="group block py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative flex items-center justify-between">
                    <span className="text-lg font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Mobile menu item accent */}
                    <div 
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        transform: `rotate(${shapeRotation * 0.5}deg)`
                      }}
                    />
                  </div>
                  
                  {/* Mobile hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-300"></div>
                  
                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </a>
              ))}
              
              {/* Mobile menu footer decoration */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-center space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
                      style={{
                        animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced animated bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-400 via-purple-500 to-transparent opacity-70">
          <div 
            className="h-full w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-400 ease-out rounded-full shadow-lg"
            style={{
              transform: `translateX(${mousePos.x * 0.04}px) scaleX(${1 + Math.sin(shapeRotation * 0.1) * 0.2})`,
              boxShadow: '0 2px 20px rgba(139, 92, 246, 0.3)'
            }}
          />
        </div>
        
        {/* Enhanced floating geometric elements */}
        <div 
          className="absolute top-3 left-12 w-3 h-3 bg-blue-400 rounded-full opacity-50 transition-all duration-300"
          style={{
            transform: `translate(${Math.sin(shapeRotation * 0.05) * 10}px, ${Math.cos(shapeRotation * 0.03) * 5}px)`
          }}
        />
        <div 
          className="absolute bottom-3 right-20 w-2 h-2 bg-purple-400 opacity-40 transition-all duration-500" 
          style={{ 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: `rotate(${shapeRotation * 0.7}deg) scale(${1 + Math.sin(shapeRotation * 0.08) * 0.3})`
          }}
        />
        <div 
          className="absolute top-5 right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 transition-all duration-400"
          style={{
            transform: `translate(${Math.cos(shapeRotation * 0.04) * 8}px, ${Math.sin(shapeRotation * 0.06) * 6}px)`
          }}
        />
        <div 
          className="hidden md:block absolute top-6 left-1/3 w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-30 transition-all duration-600" 
          style={{ 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: `rotate(${-shapeRotation * 0.5}deg) translate(${Math.sin(shapeRotation * 0.02) * 12}px, 0px)`
          }}
        />
      </div>
      
      {/* Spacer with gradient transition */}
      <div className="h-20 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
    </>
  );
};

export default Navbar;