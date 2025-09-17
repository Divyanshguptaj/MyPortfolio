import React, { useState, useMemo, useEffect, createContext } from 'react';
import HeroSection from './components/sections/heroSection';
import Navbar from './components/common/navbar';
import ProjectSection from './components/sections/projectSection';
import WorkExperience from './components/sections/workExp';
import FloatingTechBubble from './components/sections/techStacks';
import AchievementsSection from './components/sections/achievements';
import ContactSection from './components/sections/contactUs';
import FooterSection from './components/sections/footer';

// Theme Context
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const ThemeProvider = ({ children }) => {
  // Initialize theme without localStorage (not supported in Claude artifacts)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const App = () => {
  return (
    <ThemeProvider>
      <div className={`min-h-screen font-bevietnam overflow-x-hidden bg-blue-50 dark:bg-gray-900 transition-colors duration-500`}>
        <Navbar/>
        <HeroSection/>
        <WorkExperience/>
        <ProjectSection/>
        <FloatingTechBubble/>
        <AchievementsSection/>
        <ContactSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default App;