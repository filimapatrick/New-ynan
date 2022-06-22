import React from 'react'
import styled from 'styled-components';
import {MdOutlineGrass,MdOutlineSportsKabaddi,MdOutlineLightbulb } from 'react-icons/md';


function MentorshipSection6() {
    const Mentorship = styled.div` 
    background-color:rgb(243,244,246);
    padding-bottom:3rem;
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
        padding:2rem;
        align-self:center;
        display: flex;
    width: 10rem;
    text-align:center;
    border-radius:10rem;
    border:5px solid gray;
    justify-content:center;
    margin-left:7rem;
    margin-bottom:4rem;
    color:gray;

    }

    .title,p{
        text-align:center;
    }

    .title{
        font-weight:500;
        padding-bottom:1rem;
    }
    
    `
  return (
    <Mentorship>
<div className='wrapper'>
    <div className='container'>
      <div className='logo' ><MdOutlineGrass size={80}/> </div>
      <div className='title'>Nuture</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineSportsKabaddi size={80}/> </div>
      <div className='title'>Network</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineLightbulb size={80}/></div>
      <div className='title'>Inspiration</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


</div>

    </Mentorship>
  )
}

export default MentorshipSection6