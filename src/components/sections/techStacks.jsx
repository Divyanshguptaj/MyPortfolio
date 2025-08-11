import React, { useState, useEffect } from 'react';

const TechStackSection = () => {
  const [bubbleSize, setBubbleSize] = useState(500);

  useEffect(() => {
    const updateBubbleSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBubbleSize(300);
      } else if (width < 768) {
        setBubbleSize(400);
      } else if (width < 1024) {
        setBubbleSize(450);
      } else {
        setBubbleSize(500);
      }
    };

    updateBubbleSize();
    window.addEventListener('resize', updateBubbleSize);
    return () => window.removeEventListener('resize', updateBubbleSize);
  }, []);

  const techStacks = [
    // Databases
    { name: 'MySQL', icon: 'https://pngimg.com/d/mysql_PNG23.png', category: 'Databases' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', category: 'Databases' },

    // Tools
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', category: 'Tools' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', category: 'Tools' },
    { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', category: 'Tools' },
    { name: 'LaTeX', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/latex/latex-original.svg', category: 'Tools' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', category: 'Tools' },
    { name: 'JWT', icon: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg', category: 'Tools' },

    // Frameworks & Libraries
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frameworks' },
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', category: 'Frameworks' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Frameworks' },
    { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', category: 'Frameworks' },
    { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg', category: 'Frameworks' },
    { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg', category: 'Frameworks' },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', category: 'Frameworks' },

    // Programming Languages
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', category: 'Languages' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', category: 'Languages' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'Languages' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
    { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', category: 'Languages' },
    { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', category: 'Languages' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', category: 'Languages' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', category: 'Languages' },
    // { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', category: 'Languages' },
    { name: 'Bash', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg', category: 'Languages' },
    
    
  ];

  // Generate fixed positions to prevent overlapping
  const generatePositions = () => {
    const positions = [];
    const radius = (bubbleSize - 120) / 2; // Leave space for icons
    const minDistance = 60; // Minimum distance between icons
    
    for (let i = 0; i < techStacks.length; i++) {
      let position;
      let attempts = 0;
      
      do {
        const angle = Math.random() * 2 * Math.PI;
        const r = Math.random() * radius * 0.8 + radius * 0.2;
        position = {
          x: Math.cos(angle) * r,
          y: Math.sin(angle) * r
        };
        attempts++;
      } while (
        positions.some(pos => 
          Math.sqrt((pos.x - position.x) ** 2 + (pos.y - position.y) ** 2) < minDistance
        ) && attempts < 50
      );
      
      positions.push(position);
    }
    
    return positions;
  };

  const [iconPositions] = useState(() => generatePositions());

  const FloatingIcon = ({ tech, index, position }) => {
    const [currentPos, setCurrentPos] = useState(position);
    
    useEffect(() => {
      const updatePosition = () => {
        const time = Date.now() / 3000;
        const floatAmount = 15;
        
        setCurrentPos({
          x: position.x + Math.sin(time + index) * floatAmount,
          y: position.y + Math.cos(time + index * 0.7) * floatAmount
        });
      };
      
      const interval = setInterval(updatePosition, 100);
      return () => clearInterval(interval);
    }, [position, index]);

    return (
      <div
        className="absolute transition-all duration-300 ease-out group z-10"
        style={{
          transform: `translate(${currentPos.x}px, ${currentPos.y}px)`,
          left: '50%',
          top: '50%'
        }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon container */}
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white/20">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback for broken images */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm hidden">
              {tech.name.charAt(0)}
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            {tech.name}
          </div>
        </div>
      </div>
    );
  };

  // Group tech stacks by category
  const groupedTechStacks = techStacks.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  const categoryColors = {
    Languages: 'from-blue-400 to-blue-600',
    Frameworks: 'from-green-400 to-green-600',
    Databases: 'from-yellow-400 to-orange-600',
    Tools: 'from-purple-400 to-purple-600'
  };

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
              Tech Stack
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-slate-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Main Bubble Container */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="relative" style={{ width: bubbleSize, height: bubbleSize }}>
            {/* Outer bubble with gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 p-1">
              <div className="w-full h-full rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-xl"></div>
                
                {/* Floating particles effect */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${20 + (i * 10)}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}
                
                {/* Tech stack icons */}
                {techStacks.map((tech, index) => (
                  <FloatingIcon 
                    key={tech.name} 
                    tech={tech} 
                    index={index} 
                    position={iconPositions[index] || { x: 0, y: 0 }}
                  />
                ))}
              </div>
            </div>
            
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-4 sm:inset-8 rounded-full border border-purple-400/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Technologies & Tools
          </h3>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(groupedTechStacks).map(([category, techs]) => (
              <div key={category} className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-slate-600 hover:opacity-50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[category]}`}></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">{category}</h4>
                  <span className="text-slate-600 text-sm bg-white/50 rounded-full px-2 py-0.5">
                    {techs.length}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-xs hidden flex-shrink-0">
                        {tech.name.charAt(0)}
                      </div>
                      <span className="text-slate-300 text-sm sm:text-base font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/10">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`}></div>
              <span className="text-slate-300 text-sm font-medium">{category}</span>
              <span className="text-slate-600 font-bold text-xs bg-white/30 rounded-full px-2 py-0.5">
                {groupedTechStacks[category]?.length || 0}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;