import React from 'react';
import styled from 'styled-components';
import A1 from '../../image/Autism/Autism1.jpg'
import AnimatedButton from '../AnimatedButton';

function InvolvedSubsection1() {
    const Subsection = styled.div` 
    padding-top:3rem;
    padding-bottom:3rem;
    padding-left:1rem;
    padding-right:1rem;
    margin-top:-35rem;
   

    
    .image{
   height:35rem;
   max-width:100%;
   padding-bottom:3rem;

    }


    .image img{
  height:100%;
  width:100%;
  object-fit:contain;
}

h2,h6,p{
  text-align:center;
}


.involved-button{
  display:grid;
  text-align:center;
 
}

    `
  return (
    <Subsection>
<div className='container'>

<div className='image'>
    <img src={A1}/>
     </div>

<div className='text'>
    
    <h2>Participate in one of our projects</h2>
    <h6>Take part in any of our upcoming programs, outreaches and events holding close to you.</h6>
    <p>If you are interested in a career in neuroscience, apply to become a member below.</p>
    
     </div>

<div className='involved-button'>
    <AnimatedButton/>
    <span>Or</span>
    <AnimatedButton/>
    
     </div>

</div>

    </Subsection>
  )
}

export default InvolvedSubsection1;