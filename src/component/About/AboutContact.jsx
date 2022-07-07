import React from 'react';
import styled from 'styled-components';
import m7 from '../../image/main-home/m7.jpg';
import AnimatedButton from '../AnimatedButton';

function AboutContact() {

    const AboutContactStyle = styled.div ` 
    
    display: flex;
    flex-wrap: wrap;
    padding-top:4rem;
    justify-content:center;
    background-color:rgb(243,244,246);
    

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
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
    text-align:center;
    padding-top:7rem;
}

p{
    text-align:center;
    color:#aaaaaa;
  font-size:20px;
}

.light-header{
  padding-bottom:2rem;
  color:#aaaaaa;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:1.5rem;
}

h2{
  color:black;
  font-family: 'Bodoni Moda', serif;
font-family: 'Cormorant Garamond', serif;
font-family: 'Playfair Display', serif;
font-size:2rem;
}
@media screen and (max-width: 375px) {
    .right-image{
        padding-top:2rem;
    }
  }

    `
  return (
    <AboutContactStyle>

    <div className="left-text">
        <p className='light-header'>We Love Our Job</p>
        <h2>Want to know more?</h2>
        {/* <h4>JOIN OUR NETWORK </h4> */}
        <p>We love to hear from you. If you have any questions or suggestions simply click the button below to send us an email with your inquiries.

Or email us @ womeninneuroscienceng@gmail.com</p>
        {/* <a class="btn btn--lg-3 btn-primary text-white shadow--primary-2 rounded-50" href="#">Learn More</a> */}
        <AnimatedButton text={'Conact Us'} />
    </div>
    
    <div className="right-image">
        <img src={m7} alt="Avatar"/>
       </div>
    
    
    
        </AboutContactStyle>
  )
}

export default AboutContact;






