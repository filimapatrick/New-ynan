import React from 'react';
import styled from 'styled-components';
import A1 from '../../image/Lecturers/Lekpa.jpg';
// import InvolvedSubsection1 from './InvolvedSubsection1';

function InvolvedSubsection3() {
    const HomeSubsectionStyle = styled.div ` 
  
    padding-top:4rem;
    padding-bottom:4rem;
  
    

    .header{
        text-align:center;
    }
    h4{
        padding-top:2rem;
        padding-bottom:2rem;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
    }

    .container{
        height:40rem;
        width:25rem;
     
    }

    .image{
        height:20rem;
        width:auto;
        
    }

    .image img{
        height:100%;
        width:100%;
        object-fit:cover;
       
    }
    .title{
        text-align:center;
        height:5rem;
        padding-top:1rem;
    }

p{
    height:4rem;
    text-align:center;
}

    
    `
  return (
    <HomeSubsectionStyle>
          <div className='header'> 
    <i>MEET OUR LEADERSHIP TEAM</i>
    <h4>WIN Leadership</h4>
    </div>

   <div className="wrapper">


  <div className='container'>
    <div className='image'>
        <img src={A1} alt=''/>
    </div>
    <div className='activity'>activity</div>
    <div className='title'> Lekpa</div>
    <p>src/component/GetInvolved/InvolvedSubsection1.jsx
  Line 47:5:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text </p>
  </div>


  <div className='container'>
    <div className='image'>
        <img src={A1} alt=''/>
    </div>
    <div className='activity'>activity</div>
    <div className='title'> Lekpa</div>
    <p>src/component/GetInvolved/InvolvedSubsection1.jsx
  Line 47:5:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text </p>
  </div>

  <div className='container'>
    <div className='image'>
        <img src={A1} alt=''/>
    </div>
    <div className='activity'>news</div>
    <div className='title'> Lekpa</div>
    <p>src/component/GetInvolved/InvolvedSubsection1.jsx
  Line 47:5:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text </p>
  </div>



   </div>
    </HomeSubsectionStyle>
  )
}

export default InvolvedSubsection3