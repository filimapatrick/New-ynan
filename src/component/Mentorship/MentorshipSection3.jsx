import React from 'react'
import styled from 'styled-components';
import {MdOutlineGrass,MdOutlineSportsKabaddi,MdOutlineLightbulb } from 'react-icons/md';


function MentorshipSection3() {
    const Mentorship = styled.div` 
      background-color:rgb(243,244,246);
      padding-top:4rem;
      padding-bottom:4rem;
    .wrapper{
        flex-wrap:wrap;
        display:flex;
    }

    .container{
        width:25rem;
        /* background-color:gray; */
        padding-top:2rem;
        margin-top:2rem;
        gap:2rem;
        
       

    }

    .logo{
        padding-bottom:2rem;
        align-self:center;
        display: inline-block;
    width: 100%;
    text-align:center;
    }

    .title,p{
        text-align:center;
        color:#aaaaaa;
        font-size:20px;
    }

    .title{
      color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
 padding-bottom:1rem;
    }
    
    `
  return (
    <Mentorship>
<div className='wrapper'>
    <div className='container'>
      <div className='logo' ><MdOutlineGrass size={50}/> </div>
      <div className='title'>Nuture</div>
      <p>Get vital peer assistance from those who have successfully developed careers in neuroscience.</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineSportsKabaddi size={50}/> </div>
      <div className='title'>Network</div>
      <p> Make new friends. Gain access to local and worldwide chances to grow yourself.</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineLightbulb size={50}/></div>
      <div className='title'>Inspiration</div>
      <p> You are free to be anyone you choose to be. You can reach your career objectives... with YNAN's help, of course!</p>
    </div>


</div>

    </Mentorship>
  )
}

export default MentorshipSection3