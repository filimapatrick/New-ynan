import React from 'react';
import styled from 'styled-components';

function HomeAbout() {
    const HomeAbout = styled.div ` 
   
    margin-top:-34.9rem;
    padding:2rem;
    height:20rem;
    div.text {
  text-align: center;
}
.italic{
    padding-bottom:3rem;
}

    `
  return (
    <HomeAbout>
<div class="text">
    <i className='italic'>Youth Neuroscience Association Of Nigeria</i>
<h2>Who We Are</h2>
<p>Women in neuroscience, Nigeria is a growing network of female African neuroscientists who are working to inspire and provide mentor-ship and access to opportunities for more women who are interested in a career in neuroscience and STEM disciplines.

We want to equip women scientists to pursue successful careers in neuroscience and inspire the next generation of women in the STEM discipline of neuroscience.</p>
</div>




    </HomeAbout>
  )
}

export default HomeAbout