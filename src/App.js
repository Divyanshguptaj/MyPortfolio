import React from 'react'
import HeroSection from './components/sections/heroSection'
import Navbar from './components/common/navbar'
import ProjectSection from './components/sections/projectSection'
import WorkExperience from './components/sections/workExp'
import FloatingTechBubble from './components/sections/techStacks'
import AchievementsSection from './components/sections/achievements'
import ContactSection from './components/sections/contactUs'
import FooterSection from './components/sections/footer'

const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-bevietnam overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <WorkExperience/>
      <ProjectSection/>
      <FloatingTechBubble/>
      <AchievementsSection/>
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
