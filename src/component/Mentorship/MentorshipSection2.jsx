import React from 'react';
import styled from 'styled-components';
import m8 from '../../image/main-home/m8.jpg';
import AnimatedButton from '../AnimatedButton';

function MentorshipSection2() {

    const MentorshipSection2style = styled.div ` 
    
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    background-color:rgb(243,244,246);
    margin-top:-35rem;

.right-image{
    width:40rem;
    height:32rem;
   padding-bottom:2rem;
}

    .right-image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


.left-text{
    width:40rem;
    height:30rem;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
    text-align:center;
    padding-top:7rem;
}

p{
    text-align:center;
    
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
    <MentorshipSection2style>

    <div className="left-text" >
        <h2>YNAN Mentors Transforms Your Vision into Creative Results</h2>
        <p>We believe every dream is valid and we are committed to helping you achieve your goals and aspirations in neuroscience. We connect you to seasoned and accomplished neuroscientists for guidance and support in building your career and academic journey.</p>
          <h2>Start your Mentorship Application</h2>
        <AnimatedButton text={'Apply Now'}/>
        {/* <h4>JOIN OUR NETWORK </h4>
        <p>Start your registration process here. Click the button to go to our membership form.</p> */}
    </div>
    
    <div className="right-image" >
        <img src={m8} alt="Avatar"/>
       </div>
    
    
    
        </MentorshipSection2style>
  )
}

export default MentorshipSection2;






