import React from 'react';
import styled from 'styled-components';
import AnimatedButton from '../AnimatedButton';

function MentorshipSection5() {
    const MentorshipSection5 = styled.div` 
    height:30rem;
    background-color: #7ee8fa;
    background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
;
   


    .container{
        padding:2rem;
        margin:auto;
      
    }

    h2,p{
        text-align:center;
        padding-top:3rem;
        color:#aaaaaa;
        font-size:20px;
       
    }

    h2{
      color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
    }

   @media screen and (max-width: 375px) {
    height:40rem;
    }
    
    
    `
  return (
    <MentorshipSection5>
      
      <div className='container'>
        <h2>WIN Mentorship Program</h2>
        <p>Women have many brilliant crops of ideas, but no vehicle to transport these ideas into reality. The WIN Mentorship program helps bridge that gap and guide ambitious women to have a fulfilling career in science and neuroscience in particular.</p>
       {/* <div className='mentorbutton'>
       <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a>
       </div> */}
       <div className='mentorbutton'>
       <AnimatedButton  text={'succeed Today'}/>
        </div>
     
      </div>
    </MentorshipSection5>
  )
}

export default MentorshipSection5
