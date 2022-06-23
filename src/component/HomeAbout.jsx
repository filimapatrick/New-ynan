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
<div class="text">
    <p className='light-header'>Youth Neuroscience Association Of Nigeria</p>
<h2>Who We Are</h2>
<p>Women in neuroscience, Nigeria is a growing network of female African neuroscientists who are working to inspire and provide mentor-ship and access to opportunities for more women who are interested in a career in neuroscience and STEM disciplines.

We want to equip women scientists to pursue successful careers in neuroscience and inspire the next generation of women in the STEM discipline of neuroscience.</p>
</div>




    </HomeAbout>
  )
}

export default HomeAbout