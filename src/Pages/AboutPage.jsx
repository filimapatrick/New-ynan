import React from 'react'
import AboutContact from '../component/About/AboutContact'
import AboutHero from '../component/About/AboutHero'
import AboutStory from '../component/About/AboutStory'
import AboutVision from '../component/About/AboutVision'
import FooterFour from '../component/About/FooterFour'
import MemberShip from '../component/About/MemberShip'

function AboutPage() {
  return (
    <div>
   <AboutHero/>
   <AboutStory/>
   <AboutVision/>
   <AboutContact/>
   <MemberShip/>
   <FooterFour/>
    </div>
  )
}

export default AboutPage
