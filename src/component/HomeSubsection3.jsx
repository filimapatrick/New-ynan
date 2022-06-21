import React from 'react';
import styled from 'styled-components';
import A1 from '../image/Lecturers/Lekpa.jpg';



function HomeSubsection3() {
    const HomeSubsection3Style = styled.div ` 
    
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    

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
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    text-align:center;
    padding-top:7rem;
}

p{
    text-align:center;
    
}
    `
  return (
    <HomeSubsection3Style>

<div className="left-text">
    <h1>Welcome To</h1>
    <p> Women are underrepresented and less engaged in STEM disciplines. We need more women on the table to bridge gender inequality.

To this effect, there is a need for a formal and impact-oriented structure that provides much needed guidance for budding female neuroscientists.</p>
<a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a>
</div>

<div className="right-image">
    <img src={A1} alt="Avatar"/>
   </div>



    </HomeSubsection3Style>
  )
}

export default HomeSubsection3