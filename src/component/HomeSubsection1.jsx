import React from 'react';
import styled from 'styled-components';
import mentor1 from '../image/main-home/mentor1.jpg';
import m2 from '../image/main-home/m2.jpg';
import m3 from '../image/main-home/m3.jpg';

function HomeSubsection1() {
    const HomeStyle = styled.div ` 
       @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
    background-color:rgb(243,244,246);
   padding-top:4rem;
   padding-bottom:4rem;
   position:relative;


    .parent-wrapper{
        /* height: 30rem; */
        width:100%;
        display: flex;
        flex-wrap: wrap;
        

    }

   .container{
         height: 25rem;
            width:25rem;
            padding-bottom: 8rem;
            margin-bottom:2rem;
         

   }

    .container img{
        height: 100%;
        width: 100%;
        object-fit: fill;
    }
    


    .overlay {
/* background-color: rgba(0, 0, 0, 0.5); */
height:8rem;
padding-top:2rem;
}

.overlay .text{
    /* color: black; */
    text-align: center;
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


    `
  return (
    <HomeStyle>
     

<div className="parent-wrapper"> 
<div class="container">
  <img src={mentor1} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h2> Mentorship and growth</h2>
        <p>Learn from other established professionals and receive guidance to further your career goals.<br/>Photo: SONA Mentorship 2019.</p>
        
    </div>
  </div>
</div>


<div class="container">
  <img src={m2} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text"><h2>Access to opportunities</h2>
        <p>Learn about and gain access to international and local opportunities in neuroscience.</p></div>
  </div>
</div>


<div class="container">
  <img src={m3} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text"><h2>Research and conferences</h2>
        <p>Stay updated with latest news on upcoming conferences and research developments.</p></div>
  </div>
</div>
</div>
 
    </HomeStyle>
  )
}

export default HomeSubsection1
