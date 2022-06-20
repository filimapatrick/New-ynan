import React from 'react';
import styled from 'styled-components';

function HeroSection() {
    const HeroSection = styled.div ` 
height: 70rem;
  margin-top: 5rem;
  font-family: Arial, Helvetica, sans-serif;

  .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./ynan.jpeg");
  height: 50%;
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
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
h1,h4{
    color:white;
}
    `
  return (
    <HeroSection>

<div className="hero-image">
  <div className="hero-text">
    <h4>Welcome To</h4>
    <h1>Youth Neuroscience Association Of Nigeria</h1>
    <p>Setting The Pace In Nigeria</p>
    <button>Empowering Youth</button>
  </div>
</div>

    </HeroSection>
  )
}

export default HeroSection