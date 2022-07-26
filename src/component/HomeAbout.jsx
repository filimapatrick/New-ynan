import React from 'react';
import styled from 'styled-components';

function HomeAbout() {
    const HomeAbout = styled.div ` 
   @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
    margin-top:-34.9rem;
    padding:2rem;
    height:30rem;
    div.text {
  text-align: center;
  color:#aaaaaa;
  font-size:20px;
  padding-top:3rem
}


.light-header{
  padding-bottom:2rem;
  color:#aaaaaa;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}

h2{
  color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}

    `
  return (
    <HomeAbout>
<div className="text" data-aos="fade-in">
    <p className='light-header'>Youth Neuroscience Association Of Nigeria</p>
<h2>Who We Are</h2>
<p> We are a non-profit organization aimed at advancing research education and awareness of Neuroscience among Nigerian youth and students</p>
</div>




    </HomeAbout>
  )
}

export default HomeAbout