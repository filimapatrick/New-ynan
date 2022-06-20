import React from 'react';
import styled from 'styled-components';
import A1 from '../image/Lecturers/Lekpa.jpg';
function HomeSubsection2() {
    const HomeSubsection2 = styled.div ` 
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    

.left-image{
    width:20rem;
    height:32rem;
    padding-top:5rem;
    padding-bottom:5rem;
}

    .left-image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


.right-text{
    width:40rem;
    height:30rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    text-align:center;
    padding-top:7rem;
}

p{
    text-align:center;
    
}
    `
  return (
    <HomeSubsection2>
   <div className="left-image">
    <img src={A1} alt="Avatar"/>
   </div>


<div className="right-text">
    <h1>Welcome To</h1>
    <p> Women are underrepresented and less engaged in STEM disciplines. We need more women on the table to bridge gender inequality.

To this effect, there is a need for a formal and impact-oriented structure that provides much needed guidance for budding female neuroscientists.</p>
</div>
    </HomeSubsection2>
  )
}

export default HomeSubsection2