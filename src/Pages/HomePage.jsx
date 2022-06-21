import React from 'react'
import Blog from '../component/Blog'

import HeroSection from '../component/HeroSection'
import HomeAbout from '../component/HomeAbout'
import HomeSubsection1 from '../component/HomeSubsection1'
import HomeSubsection2 from '../component/HomeSubsection2'
import HomeSubsection3 from '../component/HomeSubsection3'
import HomeSubsection4 from '../component/HomeSubsection4'
import HomeSubsection5 from '../component/HomeSubsection5'
import Footer from '../component/Footer'


function HomePage() {
  return (
    <div>
        <HeroSection />
        <HomeAbout/>
        <HomeSubsection1/>
        <HomeSubsection2/>
        <HomeSubsection3/>
        <HomeSubsection4/>
        <HomeSubsection5/>
       <Blog/>
       <Footer/>
       
    </div>
  )
}

export default HomePage