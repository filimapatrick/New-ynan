import React from 'react'
import styled from 'styled-components';
import {MdOutlineGrass,MdOutlineSportsKabaddi,MdOutlineLightbulb } from 'react-icons/md';


function MentorshipSection3() {
    const Mentorship = styled.div` 
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
      <div className='logo' ><MdOutlineGrass size={50}/> </div>
      <div className='title'>Nuture</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineSportsKabaddi size={50}/> </div>
      <div className='title'>Network</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineLightbulb size={50}/></div>
      <div className='title'>Inspiration</div>
      <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element t</p>
    </div>


</div>

    </Mentorship>
  )
}

export default MentorshipSection3