import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../SecondaryButton';


function AwardHero() {
    const AboutHero = styled.div ` 
/* height: 70rem; */
  margin-top: 5rem;
  font-family: Arial, Helvetica, sans-serif;

  .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./About.jpg");
  height: 35rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


h1{
    color:white;
}
    `
  return (
    <AboutHero>

<div className="hero-image" div data-aos="zoom-in">
  <div className="hero-text">
    <h1>Award</h1>
    {/* <p>YNAN is open to youth , undergraduate basic medical and health science students ,other science students who have passion of crafting careers in Neurosçience.</p> */}
    {/* <button>Empowering Youth</button> */}
    <SecondaryButton text={'Join Us'}/>
  
  </div>
</div>

    </AboutHero>
  )
}

export default AwardHero