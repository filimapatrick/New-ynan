import React from 'react';
import styled from 'styled-components';
import A1 from '../../image/Lecturers/Lekpa.jpg';
import AnimatedButton from '../AnimatedButton';

function MentorshipSection4() {
    const MentorshipSection4 = styled.div` 
    
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    /* background-color:rgb(243,244,246); */
  

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

     `
  return (
    <MentorshipSection4>
        
        
   
    
    <div className="right-image">
        <img src={A1} alt="Avatar"/>
       </div>

       <div className="left-text">
        <h1>WIN Mentors Transforms Your Vision into Creative Results</h1>
        <AnimatedButton/>
        {/* <h4>JOIN OUR NETWORK </h4>
        <p>Start your registration process here. Click the button to go to our membership form.</p> */}
    </div>


    </MentorshipSection4>
  )
}

export default MentorshipSection4;








