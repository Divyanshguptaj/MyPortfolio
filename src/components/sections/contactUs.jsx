import React, { useState, useRef } from "react";
import { Mail, Heart, ArrowRight, Clock, User } from "lucide-react";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const container = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  const handleScroll = () => {
    if (!headerRef.current || animationTriggered) return;

    const rect = headerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Trigger when element is 80% visible
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      setAnimationTriggered(true);
    }
  };

  // Add scroll listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]);

  const handleContactClick = () => {
    const email = "luckys510039@gmail.com";
    const subject = "Excited to Connect with You!";
    const body = `
    Hi there,

    I came across your portfolio and was really impressed with your work. 
    I'd love to explore potential opportunities to collaborate or discuss how we can work together.

    Looking forward to hearing from you!

    Best regards,  
    [Your Name]  
  `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      ref={container}
      className="relative bg-indigo-50 py-20 px-4 md:px-8 font-sans overflow-hidden"
    >
      {/* Enhanced Background Elements matching achievements section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent opacity-40 select-none">
          CONTACT
        </div>
      </div>

      {/* Enhanced Floating Elements with continuous animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-sm floating-element animate-float-1"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-25 blur-sm floating-element animate-float-2"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-20 rounded-lg floating-element animate-float-3"></div>
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 blur-sm floating-element animate-float-4"></div>

      {/* Section Header with scroll-triggered animation */}
      <div 
        ref={headerRef}
        className={`relative text-center mb-24 z-10 transition-all duration-1000 ease-out ${
          animationTriggered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-block mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-all duration-500">
            Let's Connect
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse shadow-lg"></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium leading-relaxed">
          Ready to bring your ideas to life? Let's discuss how we can work
          together
        </p>
      </div>

      {/* CTA Section with delayed animation */}
      <div className="relative text-center mt-10 z-10">
        <div className="max-w-2xl mx-auto">
          <div 
            ref={cardRef}
            className={`bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 transition-all duration-1000 ease-out delay-300 ${
              animationTriggered 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="text-gray-700 font-medium text-lg">
                  Ready to start your project?
                </span>
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              </div>

              <h3 className="text-3xl font-black text-gray-800 mb-4">
                Let's Build Something Amazing Together!
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you have a clear vision or just an idea, I'm here to
                help turn your dreams into reality. Let's discuss your project
                and see how we can collaborate.
              </p>

              {/* Large Primary CTA Button */}
              <div
                className="group relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 blur group-hover:opacity-60 group-hover:blur-lg transition-all duration-500"></div>

                <button
                  onClick={handleContactClick}
                  className="relative flex items-center justify-center px-12 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black text-xl rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative flex items-center space-x-3 z-10">
                    <Mail
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHovered ? "animate-bounce" : ""
                      }`}
                    />
                    <span>Get In Touch</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1`}
                    />
                  </div>

                  {/* Ripple Effect */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
                    </div>
                  )}
                </button>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-8">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .group:hover .transform-gpu {
          filter: brightness(1.05) contrast(1.05);
        }

        /* Floating animations */
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(5deg); }
          50% { transform: translate(-20px, -40px) rotate(-3deg); }
          75% { transform: translate(-30px, 10px) rotate(2deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 30px) scale(1.1); }
          66% { transform: translate(40px, -15px) scale(0.9); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          25% { transform: translate(20px, 25px) rotate(50deg); }
          50% { transform: translate(-30px, -20px) rotate(40deg); }
          75% { transform: translate(15px, -30px) rotate(55deg); }
        }

        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 35px) scale(1.2); }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 6s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }

        .animate-float-4 {
          animation: float-4 7s ease-in-out infinite;
        }

        /* Smooth animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default ContactSection;