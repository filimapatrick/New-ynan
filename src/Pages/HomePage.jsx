import React from 'react'
import Blog from '../component/Blog'

import HeroSection from '../component/HeroSection'
import HomeAbout from '../component/HomeAbout'
import HomeSubsection1 from '../component/HomeSubsection1'
import HomeSubsection2 from '../component/HomeSubsection2'
import HomeSubsection3 from '../component/HomeSubsection3'
import HomeSubsection4 from '../component/HomeSubsection4'
import HomeSubsection5 from '../component/HomeSubsection5'
import Footer from '../component/Footer';
import Excos2 from '../component/Excos2';
// import Navbar from '../component/Navbar/Navbar'


function HomePage() {
  return (
    <div>
        <HeroSection />
        <HomeAbout/>
        <HomeSubsection1/>
        <HomeSubsection2/>
        <HomeSubsection3/>
        {/* <HomeSubsection4/> */}
        <Excos2/>
        <HomeSubsection5/>
       <Blog/>
       <Footer/>
       {/* <Navbar/> */}
    </div>
  )
}

export default HomePage