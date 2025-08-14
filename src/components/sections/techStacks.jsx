import { useState, useEffect, useCallback } from "react";
import techStacks from "../../data/TechStacks";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [bubbleSize, setBubbleSize] = useState(500);
  const [iconPositions, setIconPositions] = useState([]);
  const [floatingOffsets, setFloatingOffsets] = useState([]);
  const [screenSize, setScreenSize] = useState('lg');

  // Enhanced responsive bubble size calculation
  useEffect(() => {
    const updateBubbleSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate optimal bubble size based on viewport
      const minDimension = Math.min(width, height);
      let newSize;
      let newScreenSize;
      
      if (width < 480) {
        // Extra small screens (phones in portrait)
        newSize = Math.min(minDimension * 0.75, 260);
        newScreenSize = 'xs';
      } else if (width < 640) {
        // Small screens (phones in landscape)
        newSize = Math.min(minDimension * 0.65, 320);
        newScreenSize = 'sm';
      } else if (width < 768) {
        // Medium screens (tablets in portrait)
        newSize = Math.min(minDimension * 0.6, 380);
        newScreenSize = 'md';
      } else if (width < 1024) {
        // Large screens (tablets in landscape, small laptops)
        newSize = Math.min(minDimension * 0.55, 450);
        newScreenSize = 'lg';
      } else if (width < 1280) {
        // Extra large screens (laptops)
        newSize = Math.min(minDimension * 0.5, 520);
        newScreenSize = 'xl';
      } else {
        // 2XL screens (desktops)
        newSize = Math.min(minDimension * 0.45, 580);
        newScreenSize = '2xl';
      }
      
      setBubbleSize(Math.max(newSize, 240)); // Minimum size
      setScreenSize(newScreenSize);
    };

    updateBubbleSize();
    window.addEventListener('resize', updateBubbleSize);
    return () => window.removeEventListener('resize', updateBubbleSize);
  }, []);

  // Enhanced position generation with better distribution
  const generatePositions = useCallback(() => {
    const positions = [];
    const centerX = bubbleSize / 2;
    const centerY = bubbleSize / 2;
    
    // Dynamic radius and spacing based on screen size and bubble size
    const baseRadius = bubbleSize * 0.28;
    const minDistance = screenSize === 'xs' ? bubbleSize * 0.12 : 
                       screenSize === 'sm' ? bubbleSize * 0.11 :
                       screenSize === 'md' ? bubbleSize * 0.10 :
                       bubbleSize * 0.09;
    
    // Create multiple rings for better distribution
    const ringCount = screenSize === 'xs' ? 2 : screenSize === 'sm' ? 2 : 3;
    const iconsPerRing = Math.ceil(techStacks.length / ringCount);
    
    for (let i = 0; i < techStacks.length; i++) {
      let attempts = 0;
      let validPosition = false;
      let newPos;
      
      // Determine which ring this icon belongs to
      const ringIndex = Math.floor(i / iconsPerRing);
      const ringRadius = baseRadius * (0.5 + (ringIndex * 0.4));
      const angleOffset = ringIndex * 0.3; // Offset rings for better distribution

      while (!validPosition && attempts < 150) {
        // Use both systematic and random positioning
        const systematicAngle = (Math.PI * 2 * i) / techStacks.length;
        const randomAngle = Math.random() * Math.PI * 2;
        const angle = attempts < 50 ? systematicAngle + angleOffset : randomAngle;
        
        // Vary distance within the ring
        const distanceVariation = screenSize === 'xs' ? 0.2 : 0.3;
        const distance = ringRadius * (0.8 + Math.random() * distanceVariation);
        
        newPos = {
          x: Math.max(minDistance, Math.min(bubbleSize - minDistance, 
              centerX + Math.cos(angle) * distance)),
          y: Math.max(minDistance, Math.min(bubbleSize - minDistance, 
              centerY + Math.sin(angle) * distance))
        };

        // Enhanced overlap checking
        validPosition = positions.every(pos => {
          const dx = newPos.x - pos.x;
          const dy = newPos.y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance >= minDistance;
        });

        attempts++;
      }

      if (validPosition) {
        positions.push(newPos);
      } else {
        // Enhanced fallback with spiral arrangement
        const spiralAngle = i * 0.5 + (i * Math.PI * 2) / techStacks.length;
        const spiralRadius = baseRadius * (0.6 + (i % 3) * 0.2);
        positions.push({
          x: Math.max(minDistance, Math.min(bubbleSize - minDistance,
              centerX + Math.cos(spiralAngle) * spiralRadius)),
          y: Math.max(minDistance, Math.min(bubbleSize - minDistance,
              centerY + Math.sin(spiralAngle) * spiralRadius))
        });
      }
    }

    return positions;
  }, [bubbleSize, screenSize]);

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
        onMouseEnter={() => setHoveredTech(tech.id)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        <div className="relative">
          {/* Icon container with gradient from tech data */}
          <div 
            className={`relative bg-gradient-to-br ${tech.color} rounded-2xl p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-125 cursor-pointer border border-white/30`}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-white/40 to-white/60 opacity-80"></div>
            
            {/* Subtle inner shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-inset"></div>
            
            <img
              src={tech.icon}
              alt={tech.name}
              className={`relative z-10 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 ${
                screenSize === 'xs' ? 'w-5 h-5' :
                screenSize === 'sm' ? 'w-6 h-6' :
                screenSize === 'md' ? 'w-7 h-7' :
                screenSize === 'lg' ? 'w-8 h-8' :
                screenSize === 'xl' ? 'w-9 h-9' :
                'w-10 h-10'
              }`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Enhanced fallback for broken images */}
            <div className={`relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold hidden ${
              screenSize === 'xs' ? 'w-5 h-5 text-xs' :
              screenSize === 'sm' ? 'w-6 h-6 text-xs' :
              screenSize === 'md' ? 'w-7 h-7 text-sm' :
              screenSize === 'lg' ? 'w-8 h-8 text-sm' :
              screenSize === 'xl' ? 'w-9 h-9 text-base' :
              'w-10 h-10 text-base'
            }`}>
              {tech.name.charAt(0)}
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"></div>
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300"></div>
          </div>
          
          {/* Tooltip */}
          {hoveredTech === tech.id && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap backdrop-blur-sm animate-fadeIn z-50">
              {tech.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const categories = [...new Set(techStacks.map(tech => tech.category))];

  return (
    <div id="skills" className="relative bg-indigo-50 py-20 px-4 md:px-8 font-['Be_Vietnam_Pro'] overflow-hidden">
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-400 opacity-30 blur-[3px] select-none transform -rotate-12">
          TECH STACK
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-16 left-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/4 right-12 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 opacity-25 animate-spin" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg opacity-20 animate-pulse"></div>
      <div className="absolute bottom-16 right-20 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>

      {/* Section Header */}
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#4e45d5] font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
          Tech Stack
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#4e45d5] via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        <p className="text-lg md:text-xl text-[#343d38] mt-8 max-w-2xl mx-auto font-medium">
          Technologies I work with to bring ideas to life
        </p>
      </div>

      {/* Main Bubble Container */}
      <div className={`relative mx-auto mb-20 ${
        screenSize === 'xs' ? 'max-w-sm px-2' :
        screenSize === 'sm' ? 'max-w-md px-3' :
        screenSize === 'md' ? 'max-w-lg px-4' :
        screenSize === 'lg' ? 'max-w-2xl px-6' :
        screenSize === 'xl' ? 'max-w-3xl px-8' :
        'max-w-4xl px-10'
      }`}>
        <div className="relative flex justify-center">
          <div className="relative" style={{ width: bubbleSize, height: bubbleSize }}>
            {/* Outer Glow Ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
            
            {/* Main Bubble Container */}
            <div className={`absolute rounded-full bg-gradient-to-br from-white/60 via-blue-50/80 to-purple-50/60 backdrop-blur-lg border-2 border-white/60 shadow-2xl overflow-hidden ${
              screenSize === 'xs' ? 'inset-4' :
              screenSize === 'sm' ? 'inset-5' :
              'inset-6'
            }`}>
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/30 to-white/50 opacity-70"></div>
              
              {/* Responsive floating particles effect */}
              {[...Array(screenSize === 'xs' ? 8 : screenSize === 'sm' ? 10 : 12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute bg-gradient-to-r from-[#4e45d5]/20 to-purple-400/20 rounded-full animate-pulse ${
                    screenSize === 'xs' ? 'w-2 h-2' :
                    screenSize === 'sm' ? 'w-2.5 h-2.5' :
                    'w-3 h-3'
                  }`}
                  style={{
                    left: `${15 + (i * (70 / (screenSize === 'xs' ? 8 : screenSize === 'sm' ? 10 : 12)))}%`,
                    top: `${15 + (i * (70 / (screenSize === 'xs' ? 8 : screenSize === 'sm' ? 10 : 12)))}%`,
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: '5s'
                  }}
                ></div>
              ))}
              
              {/* Tech stack icons */}
              <div className="absolute inset-0">
                {techStacks.map((tech, index) => (
                  <FloatingIcon 
                    key={tech.id} 
                    tech={tech} 
                    index={index} 
                    position={iconPositions[index] || { x: 0, y: 0 }}
                  />
                ))}
              </div>
            </div>
            
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-[#4e45d5]/25 animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute inset-3 rounded-full border border-purple-400/30 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
            <div className="absolute inset-5 rounded-full border border-cyan-400/20 animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Tech Categories List */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#343d38] text-center mb-12">
          Categories & Technologies
        </h3>
        
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50"
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              {/* Category Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4e45d5]/5 to-purple-500/5 group-hover:from-[#4e45d5]/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-[#4e45d5] mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {category}
                </h4>
                
                <div className="space-y-2">
                  {techStacks
                    .filter(tech => tech.category === category)
                    .map((tech, techIndex) => (
                      <div 
                        key={tech.id}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/60 transition-all duration-300 group/item"
                        style={{
                          animationDelay: `${techIndex * 0.05}s`
                        }}
                      >
                        <div className="w-6 h-6 flex-shrink-0">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[#343d38] font-medium text-sm group-hover/item:text-[#4e45d5] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              
              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4e45d5] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .shadow-inset {
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default TechStack;