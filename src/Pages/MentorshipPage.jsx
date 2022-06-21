import React from 'react'

import MentorHero from '../component/Mentorship/MentorHero';
import MentorshipSection2 from '../component/Mentorship/MentorshipSection2';
import MentorshipSection3 from '../component/Mentorship/MentorshipSection3';
import ImageSlider from '../component/Mentorship/Slider';

function MentorshipPage() {
  return (
    <div>
        <MentorHero/>
        <MentorshipSection2/>
        <ImageSlider/>
        <MentorshipSection3/>
    </div>
  )
}

export default MentorshipPage