import React from 'react';
import styled from 'styled-components';
import A1 from '../../src/image/pamo/pamo1.jpg';

function HomeSubsection1() {
    const HomeStyle = styled.div ` 
    background-color:gray;
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
         height: 20rem;
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
background-color: rgba(0, 0, 0, 0.5);
height:8rem;
padding-top:2rem;
}

.overlay .text{
    color: black;
    text-align: center;

}




    `
  return (
    <HomeStyle>
     

<div className="parent-wrapper"> 
<div class="container">
  <img src={A1} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
        <h4> Mentorship and growth</h4>
        <p> Learn from other established professionals and receive guidance to further your career goals.</p>
        
    </div>
  </div>
</div>


<div class="container">
  <img src={A1} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text"><h4> Mentorship and growth</h4>
        <p> Learn from other established professionals and receive guidance to further your career goals.</p></div>
  </div>
</div>


<div class="container">
  <img src={A1} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text"><h4> Mentorship and growth</h4>
        <p> Learn from other established professionals and receive guidance to further your career goals.</p></div>
  </div>
</div>
</div>
 
    </HomeStyle>
  )
}

export default HomeSubsection1
