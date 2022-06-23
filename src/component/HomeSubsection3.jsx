import React from 'react';
import styled from 'styled-components';
import m5 from '../image/main-home/m5.jpg';
import AnimatedButton from './AnimatedButton';




function HomeSubsection3() {
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
    <p className='light-header'>JOIN OUR NETWORK</p>
    <h2>Gain valuable support in your journey</h2>
    <p> Membership is open to women who are pursuing or interested in a career in neuroscience. Click the button below to continue to our registration page..</p>
{/* <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a> */}
<AnimatedButton text={'Become A Member Now'}/>
</div>

<div className="right-image">
    <img src={m5} alt="Avatar"/>
   </div>



    </HomeSubsection3Style>
  )
}

export default HomeSubsection3