import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Heart,
  Code,
  Coffee,
  MapPin,
  Calendar,
  ArrowUp,
  Star,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

const FooterSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Track scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const footer = document.getElementById("footer-section");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove);
      return () => footer.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      icon: Github,
      url: "https://github.com/divyanshguptaj",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-500",
      description: "Check out my repositories",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/divyansh-gupta-b71017258/",
      color: "from-sky-600 to-sky-800",
      hoverColor: "hover:text-sky-400",
      description: "Connect professionally",
    },
    {
      id: 3,
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/divyanshgupta_j",
      color: "from-yellow-500 to-yellow-700",
      hoverColor: "hover:text-sky-400",
      description: "Follow my journey",
    },
    {
      id: 4,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/divyanshgupta_j/",
      color: "from-pink-800 to-orange-600",
      hoverColor: "hover:text-orange-400",
      description: "Behind the scenes",
    },
  ];

  const quickLinks = [
    { name: "About Me", href: "#" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Next.js", 
    "C++", 
    "Tailwind CSS", 
    "Git"
  ];

  return (
    <footer
      id="footer-section"
      className="relative bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-50 overflow-hidden"
    >
      {/* Matching Background Elements with Creative Stars */}
      <div className="absolute inset-0">
        {/* Grid Pattern matching other components */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/50 via-transparent to-purple-100/30"></div>

        {/* Floating decorative elements matching achievements style */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-15 animate-spin blur-sm"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-bounce blur-sm"
          style={{ animationDuration: "5s" }}
        ></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-15 animate-pulse rounded-lg"></div>
        <div
          className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-25 animate-bounce blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Creative Star Field */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Twinkling Stars */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-twinkle shadow-lg"></div>
          <div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-twinkle-delayed shadow-lg"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-twinkle shadow-lg"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-twinkle-delayed shadow-lg"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-twinkle shadow-lg"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-white rounded-full animate-twinkle-delayed shadow-lg"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Shooting Stars */}
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

          {/* Floating Code Symbols */}
          <div className="absolute top-1/5 right-1/5 text-2xl text-indigo-300 opacity-20 animate-float font-mono">
            &lt;/&gt;
          </div>
          <div className="absolute top-2/3 left-1/6 text-xl text-purple-300 opacity-15 animate-float-delayed font-mono">
            {}
          </div>
          <div className="absolute bottom-1/5 right-1/3 text-lg text-cyan-300 opacity-25 animate-float font-mono">
            ( )
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 ">
        {/* Header Section matching other components */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-all duration-500">
              Stay Connected
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse shadow-lg"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Follow my journey and let's build amazing things together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* About Section (3/4 width on large screens) */}
            <div className="lg:col-span-3 group">
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/80 hover:border-indigo-200 transform hover:scale-105 hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/20">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 group-hover:from-indigo-500/15 group-hover:via-purple-500/15 group-hover:to-pink-500/15 rounded-3xl transition-all duration-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 flex items-center group-hover:text-indigo-600 transition-colors duration-300">
                    <Code className="w-6 h-6 mr-3 text-indigo-500 group-hover:animate-bounce" />
                    About Me
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    I'm a passionate developer who loves creating beautiful,
                    functional, and user-friendly applications. Always learning,
                    always coding, always pushing boundaries.
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-2xl text-sm font-bold border border-gray-200 hover:border-indigo-300 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-medium">
                      Available for new projects
                    </span>
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-b-3xl"></div>
              </div>
            </div>

            {/* Quick Links (1/4 width on large screens) */}
            <div className="lg:col-span-1 group">
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/80 hover:border-purple-200 transform hover:scale-105 hover:rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 group-hover:from-purple-500/15 group-hover:to-pink-500/20 rounded-3xl transition-all duration-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center group-hover:text-purple-600 transition-colors duration-300">
                    <Rocket className="w-6 h-6 mr-3 text-purple-500 group-hover:animate-bounce" />
                    Quick Links
                  </h3>
                  <nav className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-600 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 group/link font-medium"
                      >
                        <span className="flex items-center">
                          <ArrowUp className="w-4 h-4 mr-2 rotate-45 group-hover/link:rotate-90 transition-transform duration-300 text-gray-400" />
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

        {/* Social Media Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 text-center">
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <div
                  key={social.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 shadow-lg hover:shadow-xl"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                    </div>
                  </a>

                  {/* Enhanced Tooltip */}
                  {hoveredSocial === social.id && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-white/95 backdrop-blur-lg text-gray-800 text-sm rounded-xl border border-gray-200 whitespace-nowrap animate-fadeInUp shadow-xl">
                      <div className="text-center">
                        <div className="font-bold">{social.name}</div>
                        <div className="text-xs text-gray-600">
                          {social.description}
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/95"></div>
                    </div>
                  )}

                  {/* 3D Shadow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl transform translate-x-2 translate-y-2 opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-20 transition-all duration-500 -z-10`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-black/60 text-sm">
              <span>© {new Date().getFullYear()} Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Divyansh</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>

            {/* Fun Stats */}
            {/* <div className="flex items-center space-x-6 text-black/60 text-sm">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Lines of code: ∞</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Dreams coded: Many</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 animate-ping"></div>
        </button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-footer {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
        }

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

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;
