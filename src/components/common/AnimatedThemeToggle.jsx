import React, { useRef, useId } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const AnimatedThemeToggle = ({ theme, toggleTheme }) => {
  const toggleRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const cloudRef = useRef(null);
  const starsRef = useRef(null);
  
  // Generate unique IDs for gradient definitions to avoid conflicts when component is used multiple times
  const uniqueId = useId();
  const sunGradientId = `sunGradient-${uniqueId}`;
  const rayGradientId = `rayGradient-${uniqueId}`;
  const moonGradientId = `moonGradient-${uniqueId}`;
  const craterGradientId = `craterGradient-${uniqueId}`;
  const starGradientId = `starGradient-${uniqueId}`;

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
            fill={`url(#${sunGradientId})`}
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
              stroke={`url(#${rayGradientId})`}
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
            fill={`url(#${moonGradientId})`}
            className="drop-shadow-sm"
          />
          {/* Moon craters */}
          <circle cx="-2" cy="-2" r="1.5" fill={`url(#${craterGradientId})`} opacity="0.6"/>
          <circle cx="2" cy="1" r="1" fill={`url(#${craterGradientId})`} opacity="0.4"/>
          <circle cx="-1" cy="3" r="0.8" fill={`url(#${craterGradientId})`} opacity="0.3"/>
        </g>

        {/* Floating cloud */}
        <g ref={cloudRef} transform="translate(32, 20)" opacity="0.8">
          <ellipse cx="0" cy="0" rx="4" ry="2" fill="white" opacity="0.6"/>
          <circle cx="-3" cy="-1" r="1.5" fill="white" opacity="0.7"/>
          <circle cx="3" cy="-1" r="1.2" fill="white" opacity="0.5"/>
        </g>

        {/* Stars */}
        <g ref={starsRef}>
          {/*
            { x: 12, y: 8 },
            { x: 20, y: 12 },
            { x: 44, y: 6 },
            { x: 52, y: 24 },
            { x: 40, y: 26 }
          */}
          {Array.from({ length: 5 }).map((_, i) => (
            <g key={i} transform={`translate(${Math.random() * 64}, ${Math.random() * 32})`} opacity="0">
              <path
                d="M0,-3 L1,0 L3,0 L1,1.5 L2,4 L0,2.5 L-2,4 L-1,1.5 L-3,0 L-1,0 Z"
                fill={`url(#${starGradientId})`}
                className="drop-shadow-sm"
              />
            </g>
          ))}
        </g>

        {/* Gradients with unique IDs */}
        <defs>
          <linearGradient id={sunGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id={rayGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id={moonGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb"/>
            <stop offset="100%" stopColor="#9ca3af"/>
          </linearGradient>
          <linearGradient id={craterGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280"/>
            <stop offset="100%" stopColor="#4b5563"/>
          </linearGradient>
          <linearGradient id={starGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
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

export default AnimatedThemeToggle;
