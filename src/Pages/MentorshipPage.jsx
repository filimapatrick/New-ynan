import React from 'react'

import MentorHero from '../component/Mentorship/MentorHero';
import MentorshipSection2 from '../component/Mentorship/MentorshipSection2';
import ImageSlider from '../component/Mentorship/Slider';

function MentorshipPage() {
  return (
    <div>
        <MentorHero/>
        <MentorshipSection2/>
        <ImageSlider/>
    </div>
  )
}

export default MentorshipPage