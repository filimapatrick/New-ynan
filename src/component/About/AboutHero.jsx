import React from 'react';
import styled from 'styled-components';


function AboutHero() {
    const AboutHero = styled.div ` 
height: 70rem;
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

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: green;
  text-align: center;
  cursor: pointer;

    &:hover {
        background-color:#0000;
        color: white;
        
    }
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
h1{
    color:white;
}
    `
  return (
    <AboutHero>

<div className="hero-image">
  <div className="hero-text">
    <h1>About Us</h1>
    <p>YNAN is an association that provides a platform for interaction,innovation,creativity and career opportunities to explore into areas related to the nervous system,especially the Brain.</p>
    <button>Empowering Youth</button>
  
  </div>
</div>

    </AboutHero>
  )
}

export default AboutHero