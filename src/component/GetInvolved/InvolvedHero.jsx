import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../SecondaryButton';

function InvolvedHero() {
    const InvoldHero = styled.div` 
    
    height: 70rem;
  margin-top: 5rem;
  font-family: Arial, Helvetica, sans-serif;

  .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./involved.jpg");
  height: 35rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

    <InvoldHero>
<div className="hero-image">
  <div className="hero-text">
    <h1>Get Invovled</h1>

    <SecondaryButton text={'Join Us'}/>
  
  </div>
</div>

    </InvoldHero>
  )
}

export default InvolvedHero





