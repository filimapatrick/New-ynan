import React from 'react';
import styled from 'styled-components';
import m6 from '../image/main-home/m6.jpg';
import AnimatedButton from './AnimatedButton';




function HomeSubsection5() {
    const HomeSubsection3Style = styled.div ` 
                   @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
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

.light-header{
 
 color:#aaaaaa;
 font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;

}
    `
  return (
    <HomeSubsection3Style>

<div className="left-text">
    <h2>Become a member of WIN Nigeria</h2>
    <p className='light-header'>JOIN OUR NETWORK </p>
    <p>Start your registration process here. Click the button to go to our membership form.</p>
    {/* <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a> */}
  <AnimatedButton text={'Register Here'} />
</div>

<div className="right-image">
    <img src={m6} alt="Avatar"/>
   </div>



    </HomeSubsection3Style>
  )
}

export default HomeSubsection5