import React from 'react'
import HeroSection from './components/sections/heroSection'
import Navbar from './components/common/navbar'
import ProjectSection from './components/sections/projectSection'
import WorkExperience from './components/sections/workExp'
import FloatingTechBubble from './components/sections/techStacks'
import AchievementsSection from './components/sections/achievements'

const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-bevietnam overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <WorkExperience/>
      <ProjectSection/>
      <FloatingTechBubble/>
      <AchievementsSection/>
    </div>
  )
}

export default App
