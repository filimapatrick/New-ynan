import React from 'react'


import MentorHero from '../component/Mentorship/MentorHero';
import MentorshipSection2 from '../component/Mentorship/MentorshipSection2';
import MentorshipSection3 from '../component/Mentorship/MentorshipSection3';
import MentorshipSection4 from '../component/Mentorship/MentorshipSection4';
import MentorshipSection5 from '../component/Mentorship/MentorshipSection5';
import MentorshipSection6 from '../component/Mentorship/MentorshipSection6';
import ImageSlider from '../component/Mentorship/Slider';
import FooterFour from '../component/About/FooterFour';
// import Excos2 from '../component/Excos2';
import Mind from '../component/Mentorship/Mind';
import Footer from '../component/Footer';

function MentorshipPage() {
  return (
    <div>
        <MentorHero/>
        <MentorshipSection2/>
        <ImageSlider/>
        <Mind/>
        {/* <Excos2/> */}
        <MentorshipSection3/>
        <MentorshipSection5/>
        <MentorshipSection6/>
  
        <MentorshipSection4/>
        {/* <FooterFour/> */}
        <Footer/>
    </div>
  )
}

export default MentorshipPage