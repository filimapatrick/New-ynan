import React from 'react';
import styled from 'styled-components';
import A1 from '../image/Lecturers/Lekpa.jpg';



function HomeSubsection5() {
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
    <h1>Become a member of WIN Nigeria</h1>
    <h4>JOIN OUR NETWORK </h4>
    <p>Start your registration process here. Click the button to go to our membership form.</p>
    <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a>
</div>

<div className="right-image">
    <img src={A1} alt="Avatar"/>
   </div>



    </HomeSubsection3Style>
  )
}

export default HomeSubsection5