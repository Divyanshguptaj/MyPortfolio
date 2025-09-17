import { useState, useEffect, useRef, useContext } from "react";
import {
  Heart,
  Code,
  Coffee,
  ArrowUp,
  Rocket,
} from "lucide-react";
import { quickLinks, skills, socialLinks } from '../../data/FooterData';
import { ThemeContext } from "../../App";

const FooterSection = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const aboutCardRef = useRef(null);
  const linksCardRef = useRef(null);
  const socialRef = useRef(null);
  const bottomRef = useRef(null);
  const starsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const { theme } = useContext(ThemeContext);

  // Intersection Observer for scroll-triggered animations
  const handleScroll = () => {
    if (!containerRef.current || animationTriggered) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Trigger when footer is 70% visible
    if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
      setAnimationTriggered(true);
      triggerAnimations();
    }
  };

  // Track scroll for back to top button
  useEffect(() => {
    const handleScrollEvent = () => {
      setShowScrollTop(window.scrollY > 500);
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [animationTriggered]);

  const triggerAnimations = () => {
    // Header animation with stagger
    if (headerRef.current) {
      const headerElements = headerRef.current.children;
      Array.from(headerElements).forEach((element, index) => {
        element.style.transform = 'translateY(0px)';
        element.style.opacity = '1';
        element.style.transition = `all 1s ease-out ${index * 0.2}s`;
      });
    }

    // Cards entrance animation
    if (aboutCardRef.current) {
      setTimeout(() => {
        aboutCardRef.current.style.transform = 'translateX(0px) scale(1)';
        aboutCardRef.current.style.opacity = '1';
      }, 400);
    }

    if (linksCardRef.current) {
      setTimeout(() => {
        linksCardRef.current.style.transform = 'translateX(0px) scale(1)';
        linksCardRef.current.style.opacity = '1';
      }, 600);
    }

    // Social icons cascade animation
    if (socialRef.current) {
      const socialIcons = socialRef.current.children;
      Array.from(socialIcons).forEach((icon, index) => {
        setTimeout(() => {
          icon.style.transform = 'translateY(0px) scale(1)';
          icon.style.opacity = '1';
        }, 800 + (index * 100));
      });
    }

    // Bottom section fade in
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current.style.opacity = '1';
        bottomRef.current.style.transform = 'translateY(0px)';
      }, 1200);
    }

    // Animate stars with delay
    starsRef.current.forEach((star, index) => {
      if (star) {
        setTimeout(() => {
          star.style.opacity = '1';
          star.style.transform = 'scale(1)';
        }, 1400 + (index * 50));
      }
    });

    // Floating elements entrance
    floatingElementsRef.current.forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
        }, 200 + (index * 100));
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Magnetic effect for social icons
  const handleMouseMove = (e, socialId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <footer
      id="footer-section"
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-500"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/50 via-transparent to-purple-100/30 dark:from-gray-800/50 dark:to-gray-900/30 animate-gradient-shift"></div>

        {/* Enhanced Floating decorative elements */}
        <div
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 scale-0 blur-sm floating-element-1"
          style={{ transition: 'all 0.8s ease-out' }}
        ></div>
        <div
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 scale-0 blur-sm floating-element-2"
          style={{ transition: 'all 0.8s ease-out' }}
        ></div>
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-0 scale-0 rounded-lg floating-element-3"
          style={{ transition: 'all 0.8s ease-out' }}
        ></div>
        <div
          ref={el => floatingElementsRef.current[3] = el}
          className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 scale-0 blur-sm floating-element-4"
          style={{ transition: 'all 0.8s ease-out' }}
        ></div>

        {/* Enhanced Star Field */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced Twinkling Stars */}
          <div 
            ref={el => starsRef.current[0] = el}
            className="absolute top-1/4 left-1/6 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 scale-0 shadow-lg star-twinkle"
            style={{ transition: 'all 0.5s ease-out' }}
          ></div>
          <div
            ref={el => starsRef.current[1] = el}
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 scale-0 shadow-lg star-twinkle"
            style={{ transition: 'all 0.5s ease-out' }}
          ></div>
          <div
            ref={el => starsRef.current[2] = el}
            className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 scale-0 shadow-lg star-twinkle"
            style={{ transition: 'all 0.5s ease-out' }}
          ></div>
          <div
            ref={el => starsRef.current[3] = el}
            className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 scale-0 shadow-lg star-twinkle"
            style={{ transition: 'all 0.5s ease-out' }}
          ></div>
          <div
            ref={el => starsRef.current[4] = el}
            className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-0 scale-0 shadow-lg star-twinkle"
            style={{ transition: 'all 0.5s ease-out' }}
          ></div>

          {/* Enhanced Shooting Stars */}
          <div className="absolute top-1/4 left-0 w-1 h-1 bg-gradient-to-r from-cyan-400 to-white rounded-full animate-shooting-star opacity-80"></div>
          <div
            className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-shooting-star-delayed opacity-70"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-0 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-shooting-star opacity-60"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Constellation Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="constellation-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 100 150 Q 200 100 300 150 T 500 150"
              stroke="url(#constellation-gradient)"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line"
            />
            <path
              d="M 150 300 Q 250 250 350 300 T 550 300"
              stroke="url(#constellation-gradient)"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line-delayed"
            />
          </svg>

          {/* Enhanced Floating Code Symbols */}
          <div className="absolute top-1/5 right-1/5 text-2xl text-indigo-300 opacity-20 animate-float font-mono hover:animate-bounce transition-all cursor-pointer">
            &lt;/&gt;
          </div>
          <div className="absolute top-2/3 left-1/6 text-xl text-purple-300 opacity-15 animate-float-delayed font-mono hover:animate-spin transition-all cursor-pointer">
            {}
          </div>
          <div className="absolute bottom-1/5 right-1/3 text-lg text-cyan-300 opacity-25 animate-float font-mono hover:animate-pulse transition-all cursor-pointer">
            ( )
          </div>
        </div>
      </div>

      {/* Floating Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-float particle-container"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/5 via-transparent to-purple-500/5 opacity-50"></div>
      
      {/* Interactive grid overlay */}
      <div className="absolute inset-0 interactive-grid opacity-20"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Enhanced Header Section */}
        <div 
          ref={headerRef}
          className="text-center mb-16"
        >
          <div 
            className="inline-block mb-8 opacity-0"
            style={{ transform: 'translateY(30px)', transition: 'all 1s ease-out' }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-700 dark:to-pink-700 bg-clip-text text-transparent mb-6 hover:scale-105 transition-all duration-500 cursor-default">
              Stay Connected
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-700 dark:to-pink-700 mx-auto rounded-full shadow-lg animate-pulse-glow"></div>
          </div>
          <p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mt-8 max-w-3xl mx-auto font-medium leading-relaxed opacity-0"
            style={{ transform: 'translateY(30px)', transition: 'all 1s ease-out 0.2s' }}
          >
            Follow my journey and let's build amazing things together
          </p>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="w-full flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Enhanced About Section */}
            <div className="lg:col-span-3 group">
              <div 
                ref={aboutCardRef}
                className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/80 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-blue-400 transform hover:scale-105 hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/20 opacity-0 scale-95"
                style={{ transform: 'translateX(-50px) scale(0.95)', transition: 'all 0.8s ease-out' }}
              >
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/10 dark:via-purple-700/10 dark:to-pink-700/10 group-hover:from-indigo-500/15 group-hover:via-purple-500/15 group-hover:to-pink-500/15 dark:group-hover:from-blue-400/20 dark:group-hover:via-purple-700/20 dark:group-hover:to-pink-700/20 rounded-3xl transition-all duration-700"></div>

                {/* Animated border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-700 dark:to-pink-700 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-4 flex items-center group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    <Code className="w-6 h-6 mr-3 text-indigo-500 dark:text-blue-400 group-hover:animate-bounce" />
                    About Me
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    I'm a passionate developer who loves creating beautiful,
                    functional, and user-friendly applications. Always learning,
                    always coding, always pushing boundaries.
                  </p>

                  {/* Enhanced Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-100 rounded-2xl text-sm font-bold border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-blue-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-blue-900 dark:hover:to-purple-900"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Status */}
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-medium">
                      Available for new projects
                    </span>
                  </div>
                </div>

                {/* Enhanced bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-blue-400 opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-b-3xl animate-shimmer"></div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="lg:col-span-1 group">
              <div 
                ref={linksCardRef}
                className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/80 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-400 transform hover:scale-105 hover:rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 opacity-0 scale-95"
                style={{ transform: 'translateX(50px) scale(0.95)', transition: 'all 0.8s ease-out' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 dark:from-purple-700/10 dark:to-pink-700/10 group-hover:from-purple-500/15 group-hover:to-pink-500/20 dark:group-hover:from-purple-700/20 dark:group-hover:to-pink-700/20 rounded-3xl transition-all duration-700"></div>

                {/* Animated border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6 flex items-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    <Rocket className="w-6 h-6 mr-3 text-purple-500 dark:text-purple-400 group-hover:animate-bounce" />
                    Quick Links
                  </h3>
                  <nav className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group/link font-medium transform hover:scale-105"
                      >
                        <span className="flex items-center">
                          <ArrowUp className="w-4 h-4 mr-2 rotate-45 group-hover/link:rotate-90 transition-transform duration-300 text-gray-400 dark:text-gray-500 group-hover/link:text-indigo-500 dark:group-hover/link:text-blue-400" />
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Media Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-8 text-center">
            Connect With Me
          </h3>
          <div 
            ref={socialRef}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <div
                  key={social.id}
                  className="group relative opacity-0 scale-75"
                  style={{ 
                    transform: 'translateY(30px) scale(0.75)', 
                    transition: 'all 0.5s ease-out',
                    animationDelay: `${index * 0.1}s` 
                  }}
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 shadow-lg hover:shadow-xl cursor-pointer"
                    onMouseMove={(e) => handleMouseMove(e, social.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}
                    ></div>
                    
                    {/* Animated glow ring */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-700 dark:to-pink-700 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 animate-spin-slow"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-gray-600 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300 group-hover:animate-bounce" />
                    </div>
                  </a>

                  {/* Enhanced Tooltip */}
                  {hoveredSocial === social.id && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg text-gray-800 dark:text-gray-100 text-sm rounded-xl border border-gray-200 dark:border-gray-700 whitespace-nowrap animate-fadeInUp shadow-xl z-50">
                      <div className="text-center">
                        <div className="font-bold">{social.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">
                          {social.description}
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/95 dark:border-t-gray-800/95"></div>
                    </div>
                  )}

                  {/* Enhanced 3D Shadow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl transform translate-x-2 translate-y-2 opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-20 transition-all duration-500 -z-10`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div 
          ref={bottomRef}
          className="border-t border-white/10 dark:border-gray-700 pt-8 opacity-0"
          style={{ transform: 'translateY(20px)', transition: 'all 0.8s ease-out' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Enhanced Copyright */}
            <div className="flex items-center space-x-2 text-black/60 dark:text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse hover:animate-bounce cursor-pointer" />
              <span>by Divyansh</span>
              <Coffee className="w-4 h-4 text-yellow-500 hover:animate-spin cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-fadeIn"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 animate-ping"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
        </button>
      )}

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        /* Enhanced Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }

        @keyframes shooting-star {
          0% { 
            transform: translateX(0) translateY(0) scale(0);
            opacity: 1;
          }
          10% {
            transform: translateX(100px) translateY(-50px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(300px) translateY(-150px) scale(0);
            opacity: 0;
          }
        }

        @keyframes shooting-star-delayed {
          0% { 
            transform: translateX(0) translateY(0) scale(0);
            opacity: 1;
          }
          15% {
            transform: translateX(80px) translateY(-40px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(250px) translateY(-120px) scale(0);
            opacity: 0;
          }
        }

        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }

        @keyframes draw-line-delayed {
          0% { stroke-dasharray: 0 1000; }
          50% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }

        @keyframes star-twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Apply animations */
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-shooting-star {
          animation: shooting-star 3s ease-out infinite;
        }

        .animate-shooting-star-delayed {
          animation: shooting-star-delayed 4s ease-out infinite;
        }

        .animate-draw-line {
          animation: draw-line 3s ease-out forwards;
        }

        .animate-draw-line-delayed {
          animation: draw-line-delayed 4s ease-out forwards;
        }

        .star-twinkle {
          animation: star-twinkle 2s ease-in-out infinite;
        }

        .particle-container {
          animation: float 8s ease-in-out infinite;
        }

        /* Enhanced floating elements */
        .floating-element-1 {
          animation: float 8s ease-in-out infinite;
        }

        .floating-element-2 {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .floating-element-3 {
          animation: float 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .floating-element-4 {
          animation: float-delayed 9s ease-in-out infinite;
          animation-delay: 6s;
        }

        /* Background gradient animations */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .interactive-grid {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: grid-shift 20s linear infinite;
        }

        @keyframes grid-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-element-1,
          .floating-element-2,
          .floating-element-3,
          .floating-element-4 {
            display: none;
          }
        }

        /* Enhanced hover effects */
        .group:hover .star-twinkle {
          animation-duration: 1s;
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-delayed,
          .animate-shooting-star,
          .animate-shooting-star-delayed,
          .animate-spin-slow,
          .star-twinkle,
          .particle-container,
          .floating-element-1,
          .floating-element-2,
          .floating-element-3,
          .floating-element-4 {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;