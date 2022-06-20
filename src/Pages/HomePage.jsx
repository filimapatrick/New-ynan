import React from 'react'
import HeroSection from '../component/HeroSection'
import HomeAbout from '../component/HomeAbout'
import HomeSubsection1 from '../component/HomeSubsection1'
import HomeSubsection2 from '../component/HomeSubsection2'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <HomeAbout/>
        <HomeSubsection1/>
        <HomeSubsection2/>
    </div>
  )
}

export default HomePage