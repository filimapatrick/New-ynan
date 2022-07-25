import React from 'react'
import AboutActivities from '../component/About/AboutActivities'
import AboutContact from '../component/About/AboutContact'
import AboutHero from '../component/About/AboutHero'
import AboutStory from '../component/About/AboutStory'
import AboutVision from '../component/About/AboutVision'
import FooterFour from '../component/About/FooterFour'
import MemberShip from '../component/About/MemberShip'
import Footer from '../component/Footer'

function AboutPage() {
  return (
    <div>
   <AboutHero/>
   <AboutStory/>
   <AboutVision/>
   <MemberShip/>
   {/* <AboutActivities/> */}
   <AboutContact/>
   {/* <FooterFour/> */}
   <Footer/>
    </div>
  )
}

export default AboutPage
