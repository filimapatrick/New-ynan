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
       
        padding-bottom:1rem;
        color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
    }

    .light-header{
  padding-bottom:2rem;
  color:#aaaaaa;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}
    
    `
  return (
    <Mentorship>
<div className='wrapper'>
    <div className='container'>
      <div className='logo' ><MdOutlineGrass size={80}/> </div>
      {/* <div className='title'>Nuture</div> */}
      <p className='light-header'>Teamwork makes the dream a reality, and together we achieve more... because outstanding scientists help one another.</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineSportsKabaddi size={80}/> </div>
      {/* <div className='title'>Network</div> */}
      <p className='light-header'> Every successful man is supported by a tribe of others.</p>
    </div>


    <div className='container'>
      <div className='logo' ><MdOutlineLightbulb size={80}/></div>
      {/* <div className='title'>Inspiration</div> */}
      <p className='light-header'> Join this great group and make a difference in the field of neuroscience!

</p>
    </div>


</div>

    </Mentorship>
  )
}

export default MentorshipSection6